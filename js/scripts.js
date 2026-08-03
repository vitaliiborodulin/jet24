$(function() {

     gsap.registerPlugin(ScrollTrigger);
     
     gsap.to(".hero__obj", {
       x: -1000, // сдвиг влево на 400 пикселей
       ease: "none",
       scrollTrigger: {
         trigger: ".hero", // секция, за которой следим
         start: "top bottom",    //когда верх секции касается низа экрана
         end: "bottom top",      // когда низ секции уходит с экрана
         scrub: true,             // плавная привязка к скроллу
         //  markers: true      // Метки для отладки (уберите на продакшне)
       }
     });
     
     
     
     // gsap.from(".flight__obj", {
     //   y: 100,         // смещение снизу в пикселях
     //   ease: "none",
     //   scrollTrigger: {
     //     trigger: ".flight", // секция, за которой следим
     //     start: "top bottom", // начало анимации, когда верх секции касается низа экрана
     //      end: "bottom top",   // конец анимации
     //     scrub: true,          // плавная привязка движения к скроллу
         
     //   }
     // });
     
     gsap.from(".flight__obj", {
       y: 150,          // Сдвиг на 150 пикселей вниз от исходной позиции
       opacity: 0,      // Плавное появление
       duration: 1,     // Длительность анимации
       scrollTrigger: {
         trigger: ".flight__obj", // Элемент, за которым следим
         start: "top 80%",  // Анимация начнется, когда верхушка блока дойдет до 80% экрана
         end: "top 30%",    // Конец анимации
         scrub: true,       // Плавная привязка к скроллу мыши
         // markers: true      // Метки для отладки (уберите на продакшне)
       }
     });
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

});