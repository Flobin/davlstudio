(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function DOMContentLoaded() {

  if (contactForm) {
    contactFormInputs();
  }

}

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

var contactForm = document.querySelector('#contactform');

function contactFormInputs() {

    var formInputs = document.querySelectorAll( '.input' );
    forEach(formInputs, function(index, element) {
      if(element.value.trim() !== '') {
        element.parentNode.classList.add('input--filled');
      }
      // events:
      element.addEventListener( 'focus', onInputFocus );
      element.addEventListener( 'blur', onInputBlur );
    })

    function onInputFocus(event) {
      event.target.parentNode.classList.add('input--filled');
    }
    function onInputBlur(event) {
      if (event.target.value.trim() === '') {
        event.target.parentNode.classList.remove('input--filled')
      }
    }

}

function forEach(array, callback, scope) {
  for (var i = 0; i < array.length; i++) {
    callback.call(scope, i, array[i]); // passes back stuff we need
  }
};

},{}]},{},[1])

//# sourceMappingURL=contact.js.map
