var imagesLoaded = require('imagesloaded');

var rightContainer = document.querySelector('.right-container');
var rightContent = document.querySelector('.right-content');
var leftContainer = document.querySelector('.left-container');
var leftContent = document.querySelector('.left-content');
var minHeight = document.querySelector('.content article');

function DOMContentLoaded() {

  imagesLoaded(rightContent, { background: true }, function() {
    rightContainer.classList.add('visible');
    
    // get sizes
    var rightHeight = outerSize(rightContent, 'height');
    var leftHeight = outerSize(leftContent, 'height');
    var minHeight = window.innerHeight - outerSize(document.querySelector('.site-header'), 'height') - outerSize(document.querySelector('.site-footer'), 'height');
    var rem = parseFloat(getComputedStyle(document.body).fontSize);

    if ( rightHeight > minHeight || leftHeight > minHeight ) {
      // at least one element tall enough
      rightContainer.classList.remove('standard');
      leftContainer.classList.remove('standard');

      if ( rightHeight > minHeight && leftHeight > minHeight ) {
        // both elements taller than minHeight
        
        if ( rightHeight > leftHeight ) {
          rightContainer.classList.add('parallax');
          scroll(minHeight, 'right', rem);
        } else if ( leftHeight > rightHeight ) {
          leftContainer.classList.add('parallax');
          scroll(minHeight, 'left', rem);
        }
        // if both elements are equally tall and taller than minHeight, do nothing

      } else if ( rightHeight > leftHeight ) {
        // only right is taller than minHeight
        leftContainer.classList.add('parallax');
      } else if ( leftHeight > rightHeight) {
        // only left is taller than minHeight
        rightContainer.classList.add('parallax');
      }
    }
    // if neither element is taller than minHeight, do nothing
  })

}

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

function scroll(minHeight, side, rem) {

  // get position
  var scrollY = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.body.scrollHeight;
  var normalized = scrollY / (height - window.innerHeight);

  // decide which side is parallax
  var scrollContainer = leftContainer;
  var scrollContent = leftContent;
  var otherContainer = rightContainer;
  if ( side === 'right' ) {
    scrollContainer = rightContainer;
    scrollContent = rightContent;
    otherContainer = leftContainer;
  }

  // apply parallax
  var parallaxHeight = scrollContainer.clientHeight;
  var parallaxContentHeight = scrollContainer.scrollHeight; 
  var parallaxOffset = (parallaxHeight - minHeight) * normalized - 2 * rem;
  scrollContent.style.transform = "translate3D(0,-" + parallaxOffset + "px,0)";
  
  requestAnimationFrame(function() {
    scroll(minHeight, side, rem);
  });
  
}

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
