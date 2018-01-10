var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesloaded');

var tags = document.querySelectorAll('.homepage-article-tag');
var masonryContainer = document.querySelector('.main');
var showAll = document.querySelector('.show-all');

var msnry = new Masonry( masonryContainer, {
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  transitionDuration: '0.6s'
});

function DOMContentLoaded() {

  console.log('DOMContentLoaded home.js');

  msnry.layout();
  forEach(document.querySelectorAll('.grid-item'), function(index, element) {
    element.classList.add('visible');
  });

  if (masonryContainer) {
    imagesLoaded(masonryContainer, { background: true }, function() {
      console.log('images loaded');
      msnry.layout();
    })
  }

}

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};
