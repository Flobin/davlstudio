var Masonry = require('masonry-layout');
var imagesLoaded = require('imagesloaded');
var Headroom = require('headroom.js');

var tags = document.querySelectorAll('.homepage-article-tag');
var masonryContainer = document.querySelector('.main');
var showAll = document.querySelector('.show-all');
var backgroundColors = ['pink','green','orange','dark-blue']

var msnry = new Masonry( masonryContainer, {
  itemSelector: '.grid-item',
  percentPosition: true,
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  transitionDuration: '0.6s'
});

function DOMContentLoaded() {

  // console.log('DOMContentLoaded home.js');

  forEach(document.querySelectorAll('.random-background'), function(index, element){
    var color = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
    element.classList.add(color);
    // console.log('applied '+color+' to '+element);
  });
  var color = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
  document.querySelector('#home-header-img').classList.add(color); 

  msnry.layout();
  forEach(document.querySelectorAll('.grid-item'), function(index, element) {
    element.classList.add('visible');
  });

  if (masonryContainer) {
    imagesLoaded(masonryContainer, { background: true }, function() {
      // console.log('images loaded');
      msnry.layout();
    })
  }

  // grab an element
  var homeHeader = document.querySelector(".site-header");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(homeHeader, {
    "offset": 1200,
    "tolerance": 10,
    "classes": {
      "initial": "top",
      "pinned": "pinned",
      "unpinned": "unpinned"
    }
  });
  // initialise
  headroom.init();

}

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};
