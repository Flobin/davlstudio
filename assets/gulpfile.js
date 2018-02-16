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
    plumber = require('gulp-plumber'),
    $ = require('gulp-load-plugins')(),
    swPrecache = require('sw-precache'),
    path = require('path'),
    packageJson = require('./package.json');

function writeServiceWorkerFile(rootDir, handleFetch, callback) {
  var config = {
    cacheId: packageJson.name,
    /*
    dynamicUrlToDependencies: {
      'dynamic/page1': [
        path.join(rootDir, 'views', 'layout.jade'),
        path.join(rootDir, 'views', 'page1.jade')
      ],
      'dynamic/page2': [
        path.join(rootDir, 'views', 'layout.jade'),
        path.join(rootDir, 'views', 'page2.jade')
      ]
    },
    */
    // If handleFetch is false (i.e. because this is called from generate-service-worker-dev), then
    // the service worker will precache resources but won't actually serve them.
    // This allows you to test precaching behavior without worry about the cache preventing your
    // local changes from being picked up during the development cycle.
    handleFetch: handleFetch,
    logger: $.util.log,
    runtimeCaching: [{
      // See https://github.com/GoogleChrome/sw-toolbox#methods
      urlPattern: /runtime-caching/,
      handler: 'cacheFirst',
      // See https://github.com/GoogleChrome/sw-toolbox#options
      options: {
        cache: {
          maxEntries: 1,
          name: 'runtime-cache'
        }
      }
    }],
    staticFileGlobs: [
      rootDir + '{content,thumbs,assets/build,kirby,site,vendor}/**/*.{js,html,css,png,jpg,,jpeg,gif,xml}',
      rootDir + 'index.html',
      rootDir + 'index.php',
      rootDir + 'https://use.typekit.net/oms7gsw.css'
    ],
    stripPrefix: rootDir + '/',
    // verbose defaults to false, but for the purposes of this demo, log more.
    verbose: false
  };

  swPrecache.write(path.join(rootDir, 'service-worker.js'), config, callback);
}

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

gulp.task('sw-dev', function(callback) {
  writeServiceWorkerFile('../', false, callback);
});

gulp.task('sw-dist', function(callback) {
  writeServiceWorkerFile('../', true, callback);
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

gulp.task('serviceworker-scripts', function () {
  var b = browserify({
    entries:[
      'src/scripts/sw.js'
    ],
    debug: true
  });

  return b.bundle()
    .pipe(source('sw.js'))
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
    .pipe(notify({ message: 'Serviceworker-scripts task complete' }));
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
  gulp.start('styles', 'form-scripts', 'home-scripts', 'lightbox-scripts', 'parallax-scripts', 'serviceworker-scripts', 'images', 'sw-dist');
});

gulp.task('watch', function() {
  // Watch .scss files
  gulp.watch('src/styles/**/*.scss', ['styles', 'sw-dev']);
  // Watch .js files
  gulp.watch('src/scripts/**/*.js', ['form-scripts', 'home-scripts', 'lightbox-scripts', 'parallax-scripts', 'serviceworker-scripts', 'sw-dev']);
  // Watch image files
  gulp.watch('src/images/**/*', ['images', 'sw-dev']);
  // Create LiveReload server
  livereload.listen();
  // Watch any files in dist/, reload on change
  gulp.watch(['build/**']).on('change', livereload.changed);

});
