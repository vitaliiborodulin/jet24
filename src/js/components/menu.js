// burger

const burger = $('.burger');
const menu = $('.header');

burger.on('click', function(e) {
    e.preventDefault();
    burger.toggleClass('burger-close');
    menu.toggleClass('open');
    $('html, body').toggleClass('overflow');
     syncScrolledHeader();
});

$(document).keyup(function(e) {
    if (e.key === "Escape" || e.keyCode === 27) {
        menu.removeClass('open');
        burger.removeClass('burger-close');
        $('html, body').removeClass('overflow');
        syncScrolledHeader();
    }
});

if ($(window).width() <= 768) {

    $('body').on('click', '.header__menu a[href*="#"]', function(e) {
        // var fixed_offset = 50;

        // $('html,body').stop().animate({
        //     scrollTop: $(this.hash).offset().top - fixed_offset
        // }, 300);
        // e.preventDefault();
        burger.toggleClass('burger-close');
        menu.toggleClass('open');
        $('html, body').removeClass('overflow');
        syncScrolledHeader();
    });

}