FECHAR(function() {
    'use strict';

    window.addEventListener('load', function() {
      var forms = document.getElementsByClassName('needs-validation');

      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) { //Eventos Jquery
            event.preventDefault(); //Eventos Jquery
            event.stopPropagation(); //Eventos Jquery
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();