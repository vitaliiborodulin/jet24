$(function() {

     gsap.registerPlugin(ScrollTrigger);
     
     const mm = gsap.matchMedia();
     
     mm.add("(min-width: 768px)", () => {
       gsap.from(".hero__obj", {
         x: 1500, 
         ease: "none",
         scrollTrigger: {
           trigger: ".hero",
           start: "top bottom",
           end: "bottom top",
           scrub: 2,
           // markers: true
         }
       });
     });
     
     mm.add("(max-width: 767px)", () => {
       gsap.from(".hero__obj", {
           x: 400, 
           ease: "none",
           scrollTrigger: {
             trigger: ".hero",
             start: "top bottom",
             end: "bottom top",
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
     if ($(window).width() <= 768) {
     
         $('.features__item').on('click', function(){
             $(this).toggleClass('active');
         });
     
     }
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

});