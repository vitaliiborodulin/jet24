$(function() {

     gsap.registerPlugin(ScrollTrigger);
     
     const mm = gsap.matchMedia();
     
     mm.add("(min-width: 768px)", () => {
       gsap.from(".hero__obj", {
         x: 2000, 
         ease: "none",
         scrollTrigger: {
           trigger: ".hero",
           start: "top bottom",
           end: "bottom 60%",
           scrub: 2,
         }
       });
     });
     
     mm.add("(max-width: 767px)", () => {
       gsap.from(".hero__obj", {
           x: 800, 
           ease: "none",
           scrollTrigger: {
             trigger: ".hero",
             start: "top bottom",
             end: "bottom 60%",
             scrub: 2,
             // markers: true
           }
       });
     });
     
     
     
     
     // mm.add("(min-width: 768px)", () => {
       gsap.from(".flight__obj", {
         y: 200,
         ease: "none",
         scrollTrigger: {
           trigger: ".flight",
           start: "top bottom",
           end: "bottom top",
           scrub: 2
         }
       });
     // });
     
     // mm.add("(max-width: 767px)", () => {
     //   gsap.to(".flight__obj", {
     //     y: -280, 
     //     ease: "none",
     //     scrollTrigger: {
     //       trigger: ".flight",
     //       start: "top bottom",
     //       end: "bottom top",
     //       scrub: 2
     //     }
     //   });
     // });
     
     mm.add("(min-width: 768px)", () => {
       gsap.to(".steps__obj", {
         x: 1000,
         ease: "none",
     
         scrollTrigger: {
           trigger: ".steps__obj",
           start: "top 50%",
           end: "bottom 20%",
           scrub: 2,
           // pin: true
         }
       });
     });
     if ($(window).width() <= 768) {
     
         $('.features__item').on('click', function(){
             $(this).toggleClass('active');
             // $(this).find('.features__title').toggle();
             // $(this).find('.features__overlay').toggle();
         });
     
     }
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
     
     // featuresSlider.on('afterChange', function(event, slick, currentSlide) {
     //     $('.features__overlay').css('opacity', 0);
     //     $('.features__title').css('opacity', 1);
     // });
     
     
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
     $('.popup-link').fancybox({
         // thumbs : { autoStart:true },
         toolbar: "auto",
         infobar: true,
         smallBtn: "auto",
         protect: true,
         loop: true,
         iframe : {
             preload : false
         },
         closeExisting : true
     });
     var arrowUpBtn = $('#scroll-button');
     
     function scrollBtn() {
     	var top = $(this).scrollTop();
     
     	if (top > 300) {
     		arrowUpBtn.fadeIn(500);
     	} else {
     		arrowUpBtn.fadeOut(500);
     	}
     }
     
     scrollBtn();
     
     $(window).on('scroll', scrollBtn);
     
     arrowUpBtn.click(function(e) {
         e.preventDefault();
     
         $('body, html').animate({
             scrollTop: 0
         }, 300)
     });

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