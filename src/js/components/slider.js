// features slider

const featuresSlider = $('.features__box');

function initFeaturesSlider() {
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

initFeaturesSlider();

$(window).on('resize', function () {
    initFeaturesSlider();
});

// teamslider

const teamSlider = $('.team__box');

function initTeamSlider() {
    if ($(window).width() <= 768) {
        if (!teamSlider.hasClass('slick-initialized')) {
            teamSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                // variableWidth: true,
                nextArrow: $('.team .arrow-next'),
                prevArrow: $('.team .arrow-prev'),
            });
        }
    } else {
        if (teamSlider.hasClass('slick-initialized')) {
            teamSlider.slick('unslick');
        }
    }
}

initTeamSlider();

$(window).on('resize', function () {
    initTeamSlider();
});