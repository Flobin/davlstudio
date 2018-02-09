var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    livereload = require('gulp-livereload'),
    del = require('del'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    plumber = require('gulp-plumber');

gulp.task('styles', function() {
  return gulp.src(['src/styles/main.scss'])
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer('last 2 version'))
  .pipe(gulp.dest('build/css'))
  .pipe(rename({suffix: '.min'}))
  .pipe(cleancss())
  .pipe(gulp.dest('build/css'))
  .pipe(notify({ message: 'Styles task complete' }));
});

gulp.task('form-scripts', function () {
  var b = browserify({
    entries: [
      'src/scripts/form.js',
    ],
    debug: true,
  });

  return b.bundle()
    .pipe(source('form.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js/'))
    .pipe(notify({ message: 'form-scripts task complete' }));
});

gulp.task('home-scripts', function () {
  var b = browserify({
    entries: [
      'src/scripts/home.js',
      'node_modules/imagesloaded/imagesloaded.js',
      'node_modules/masonry-layout/masonry.js',
      'node_modules/headroom.js/dist/headroom.js'
    ],
    debug: true,
  });

  return b.bundle()
    .pipe(source('home.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js/'))
    .pipe(notify({ message: 'Home-scripts task complete' }));
});

gulp.task('parallax-scripts', function () {
  var b = browserify({
    entries: ['src/scripts/parallax.js'],
    debug: true
  });

  return b.bundle()
    .pipe(source('parallax.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(plumber(function(error) {
      // Output an error message
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      this.emit('end');
    }))
        // Add transformation tasks to the pipeline here.
        // .pipe(uglify())
        // .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js/'))
    .pipe(notify({ message: 'Parallax-scripts task complete' }));
});

gulp.task('lightbox-scripts', function () {
  var b = browserify({
    entries:[
      'src/scripts/lightbox.js'
    ],
    debug: true
  });

  return b.bundle()
    .pipe(source('lightbox.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(plumber(function(error) {
      // Output an error message
      gutil.log(gutil.colors.red('Error (' + error.plugin + '): ' + error.message));
      // emit the end event, to properly end the task
      this.emit('end');
    }))
        // Add transformation tasks to the pipeline here.
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(sourcemaps.write('./')) // writes .map file
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build/js/'))
    .pipe(notify({ message: 'Lightbox-scripts task complete' }));
});

gulp.task('images', function() {
  return gulp.src('src/images/**/*')
  .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
  .pipe(gulp.dest('build/img'))
  .pipe(notify({ message: 'Images task complete' }));
});

gulp.task('clean', function() {
  return del(['build/css', 'build/js', 'build/img']);
});

gulp.task('default', ['clean'], function() {
  gulp.start('styles', 'form-scripts', 'home-scripts', 'lightbox-scripts', 'parallax-scripts', 'images');
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles']);
  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['form-scripts', 'home-scripts', 'lightbox-scripts', 'parallax-scripts']);
  // Watch image files
  gulp.watch('src/images/**/*', ['images']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['build/**']).on('change', livereload.changed);

});
