const featuresSlider = $('.features__box');

function initSlick() {
        if ($(window).width() <= 768) {
            if (!featuresSlider.hasClass('slick-initialized')) {
                featuresSlider.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    nextArrow: $('.features .arrow-next'),
                    prevArrow: $('.features .arrow-prev'),
                });
            }
        } else {
            if (featuresSlider.hasClass('slick-initialized')) {
                featuresSlider.slick('unslick');
            }
        }
    }

    initSlick();

    $(window).on('resize', function () {
        initSlick();
    });