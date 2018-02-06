function DOMContentLoaded() {

  if (form) {
    formInputs();
    if (form.id == 'contactform') {
      // console.log('contactform');
      document.querySelector('.form .submit').addEventListener('click', function(event) {
        event.preventDefault();
        var message = serialize(form);
        // console.log('message: ' + message);
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '//formspree.io/cd1c5968@opayq.com', true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        // xhr.setRequestHeader("Content-length", message.length);
        // xhr.onreadystatechange = function() {//Call a function when the state changes.
        //   if(xhr.readyState == 4 && xhr.status == 200) {
        //     console.log(xhr.responseText);
        //   }
        // }
        xhr.send(message);
        alert('Bedankt voor uw bericht, we nemen zo snel mogelijk contact met up op.');
        window.location.reload(true);
      })
    }
    
  }

}

document.addEventListener('DOMContentLoaded', DOMContentLoaded);

var form = document.querySelector('.form');
// var contactform = document.querySelector('#contactform');

function formInputs() {

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

function serialize(form) {
  if (!form || form.nodeName !== "FORM") {
    return;
  }
  var i, j, q = [];
  for (i = form.elements.length - 1; i >= 0; i = i - 1) {
    if (form.elements[i].name === "") {
      continue;
    }
    switch (form.elements[i].nodeName) {
    case 'INPUT':
      switch (form.elements[i].type) {
      case 'text':
      // case 'hidden':
      // case 'password':
      case 'button':
      // case 'reset':
      case 'submit':
      // case 'color':
      // case 'date':
      // case 'datetime-local':
      case 'email':
      // case 'month':
      // case 'number':
      // case 'range':
      // case 'search':
      // case 'tel':
      // case 'time':
      // case 'url':
      // case 'week':
      //  q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
      //  break;
      // case 'checkbox':
      // case 'radio':
      //   if (form.elements[i].checked) {
      //     q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
      //   }
      //   break;
      // case 'file':
      //   break;
      }
      break;
    case 'TEXTAREA':
      q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
      break;
    // case 'SELECT':
    //   switch (form.elements[i].type) {
    //   case 'select-one':
    //     q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
    //     break;
    //   case 'select-multiple':
    //     for (j = form.elements[i].options.length - 1; j >= 0; j = j - 1) {
    //       if (form.elements[i].options[j].selected) {
    //         q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].options[j].value));
    //       }
    //     }
    //     break;
    //   }
    //   break;
    case 'BUTTON':
      switch (form.elements[i].type) {
      case 'reset':
      case 'submit':
      case 'button':
        q.push(form.elements[i].name + "=" + encodeURIComponent(form.elements[i].value));
        break;
      }
      break;
    }
  }
  return q.join("&");
}
