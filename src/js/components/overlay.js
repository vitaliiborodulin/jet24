if ($(window).width() <= 768) {

    $('.features__item').on('click', function(){
        $(this).toggleClass('active');
        // $(this).find('.features__title').toggle();
        // $(this).find('.features__overlay').toggle();
    });

}

