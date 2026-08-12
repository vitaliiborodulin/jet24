// form select

$('.form__select').niceSelect();

// form calendar

$(".cal").flatpickr({
    mode: "range",
    minDate: "today",
    dateFormat: "d.m",
    // disableMobile: "true"
});

// form passengers

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

// contact form hidden


$('.btn-adds').on('click', function(e) {
    e.preventDefault();

    const formAdds = $('.form__adds');

    

    if (!$(this).hasClass('active')){
        $(this).addClass('active');
        formAdds.slideDown(300);
    } else {
        $(this).removeClass('active');
        formAdds.slideUp(300);
    }
});