var imagesLoaded = require('imagesloaded');

var rightContent = document.querySelector('.right-content');
var leftContent = document.querySelector('.left-content');
var title = document.querySelector('.project-header, .article-header');       
var minHeight;

function DOMContentLoaded() {

  imagesLoaded(rightContent, { background: true }, function() {
    rightContent.classList.add('visible');
    
    // get sizes
    var rem = parseFloat(getComputedStyle(document.body).fontSize);
    var rightHeight = outerSize(rightContent, 'height');
    var leftHeight = outerSize(leftContent, 'height');
    var safeMargin = 1 * rem * 0;
    var minHeight = window.innerHeight - outerSize(document.querySelector('.site-header'), 'height') - outerSize(document.querySelector('.site-footer'), 'height') + safeMargin;

    if ( rightHeight > minHeight && leftHeight < minHeight ) {
      // right is taller than minHeight and left is not
      console.log('right');
      leftContent.classList.add('fixed');
      title.classList.add('fixed');
      rightContent.classList.add('offset-top');
    } else if ( leftHeight > minHeight && rightHeight < minHeight ) {
      // left is taller than minHeight and right is not
      console.log('left');
      rightContent.classList.add('fixed');
      title.classList.add('fixed');
      leftContent.classList.add('offset-top');
    } else if ( leftHeight > minHeight && rightHeight > minHeight ) {
      // both are taller than minHeight
      title.classList.add('fixed');
      leftContent.classList.add('offset-top');
      rightContent.classList.add('offset-top');
      console.log('both');
      console.log('minHeight: ' + minHeight);
      console.log('leftHeight: ' + leftHeight);
      console.log('rightHeight: ' + rightHeight);
      console.log('safe margin: ' + safeMargin);
    } else {
      // if neither element is taller than minHeight, do nothing
      console.log('neither');
      console.log('minHeight: ' + minHeight);
      console.log('leftHeight: ' + leftHeight);
      console.log('rightHeight: ' + rightHeight);
      console.log('safe margin: ' + safeMargin);
    }
  });

}

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

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
