var imagesLoaded = require('imagesloaded');
var Headroom = require('headroom.js');

// colors of header and items in between news
var backgroundColors = ['pink','green','orange','dark-blue'];

// this is to show the header when you scroll past projects
var projects = document.querySelector('.home-projects');
var projectsPosition = 1200;

// load more with AJAX
// var articlesContainer = document.querySelector('.content');
// var limit = parseInt(articlesContainer.dataset.limit);
// var page = articlesContainer.dataset.page + '/.json'
// var offset = limit;
// var loadMoreButton = document.querySelector('.load-more');
// var loadMoreData = {
//   'limit': limit,
//   'offset': offset
// }

// resizes grid items so they fit content height
function resizeGridItem(item){
  console.log('resizeGridItem');
  var grid = document.querySelector('.grid');
  var rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
  var rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
  var content = item.querySelector('.homepage-article-content');
  var rowSpan = Math.ceil((outerSize(content, 'height') + rowGap) / (rowHeight + rowGap));
  item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
  console.log('resizeAllGridItems');
  var allItems = document.querySelectorAll('.grid-item');
  forEach(allItems, function(index, element){
    resizeGridItem(element);
  });
}

function animate() {
  resizeAllGridItems();
  requestAnimationFrame(animate);
}


function DOMContentLoaded() {

  // console.log('DOMContentLoaded home.js');

  // set background colors on items in between news
  forEach(document.querySelectorAll('.random-background'), function(index, element){
    var color = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
    element.classList.add(color);
    // console.log('applied '+color+' to '+element);
  });
  var color = backgroundColors[Math.floor(Math.random()*backgroundColors.length)];
  document.querySelector('#home-header-img').classList.add(color); 

  // show items and resize once DOMContentLoaded
  forEach(document.querySelectorAll('.grid-item'), function(index, element) {
    element.classList.add('visible');
    resizeGridItem(element);
  });

  //once images loaded, resize again just to make sure
  imagesLoaded(articlesContainer, resizeAllGridItems);

  //keep resizing
  requestAnimationFrame(animate);

  // get projects position
  if (projects) {
    projectsPosition = projects.offsetTop + outerSize(projects, 'height');
  }
  // grab an element
  var homeHeader = document.querySelector(".site-header");
  // construct an instance of Headroom, passing the element
  var headroom  = new Headroom(homeHeader, {
    "offset": projectsPosition,
    "tolerance": 10,
    "classes": {
      "initial": "top",
      "pinned": "pinned",
      "unpinned": "unpinned"
    }
  });
  headroom.init();

  // load more with AJAX
  // loadMoreButton.addEventListener('click', function() {
  //   var xhr = new XMLHttpRequest();
  //   var params = 'limit=' + limit + '&offset=' + offset;
  //   var getURL = page + '?' + params;
  //   console.log('getURL: ' + getURL);
  //   xhr.onreadystatechange = function() {
  //     if (this.readyState == 4 && this.status == 200) {
  //       var jsonResponse = xhr.responseText;
  //       var data = JSON.parse(jsonResponse);
  //       if(data.more == false) {
  //         // hide button
  //         console.log('no more');
  //       }
  //       // append new articles
  //       console.log(data.html);
  //       articlesContainer.insertAdjacentHTML('beforeend', data.html);
  //       forEach(document.querySelectorAll('.grid-item'), function(index, element) {
  //         element.classList.add('visible');
  //         resizeGridItem(element);
  //       });
  //       // increase offset
  //       console.log('the rest');
  //       offset += limit;
  //       resizeAllGridItems;
  //     }
  //   };
  //   xhr.open('GET', getURL);
  //   xhr.send();
  // }, false);

}

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

// resize items when window changes size
window.addEventListener("resize", resizeAllGridItems);

// forEach for nodes
function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

// size of elements
function outerSize(el,direction) {
  var height = el.offsetHeight;
  var width = el.offsetWidth;
  var style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  width += parseInt(style.marginLeft) + parseInt(style.marginRight);

  if (direction === 'height') {
    return height;
  } else if (direction === 'width') {
    return width;
  }
}
