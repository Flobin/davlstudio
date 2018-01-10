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
