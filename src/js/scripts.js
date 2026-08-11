$(function() {

     //= components/parallax
     //= components/overlay
     //= components/slider
     //= components/popup
     //= components/scrollBtn

     $('.form__select').niceSelect();

     $(".cal").flatpickr({
          mode: "range",
          minDate: "today",
          dateFormat: "d.m",
          // disableMobile: "true"
     });

     $(document).on('click', '.plus', function () {
          const $form = $(this).closest('.form__item');
          const $input = $form.find('.form__input');

          $input.val(parseInt($input.val(), 10) + 1);
     });

     $(document).on('click', '.minus', function () {
          const $form = $(this).closest('.form__item');
          const $input = $form.find('.form__input');

          let value = parseInt($input.val(), 10);

          if (value > parseInt($input.attr('min'), 10)) {
               $input.val(value - 1);
          }
     });


     // document.querySelectorAll("form").forEach(form => {
     //      form.addEventListener("submit", event => {
     //           event.preventDefault();
     //      });
     // });

});


   