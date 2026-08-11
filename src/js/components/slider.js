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

// fleet slider

const fleetSlider = $('.fleet__list');

fleetSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    touchMove: false,
    draggable: false,
    swipeToSlide: false,
    fade: true,
    nextArrow: $('.fleet .arrow-next'),
    prevArrow: $('.fleet .arrow-prev'),
});

const fleetTableSlider = $('.fleet__table');

function initFleetTableSlider() {
    if ($(window).width() <= 768) {
        if (!fleetTableSlider.hasClass('slick-initialized')) {
            fleetTableSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: false,
                infinite: false
            });
        }
    } else {
        if (fleetTableSlider.hasClass('slick-initialized')) {
            fleetTableSlider.slick('unslick');
        }
    }
}

initFleetTableSlider();

// destinations slider

const destSlider = $('.dest__list');

destSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    touchMove: false,
    draggable: false,
    swipeToSlide: false,
    fade: true,
    nextArrow: $('.dest .arrow-next'),
    prevArrow: $('.dest .arrow-prev'),
});

// steps slider

const stepsSlider = $('.steps__list');

function initStepsSlider() {
    if ($(window).width() <= 768) {
        if (!stepsSlider.hasClass('slick-initialized')) {
            stepsSlider.slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                arrows: false,
                infinite: false
            });
        }
    } else {
        if (stepsSlider.hasClass('slick-initialized')) {
            stepsSlider.slick('unslick');
        }
    }
}

initStepsSlider();

$(window).on('resize', function () {
    initFeaturesSlider();
    initTeamSlider();
    initFleetTableSlider();
    initStepsSlider();
});
