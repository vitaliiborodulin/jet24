window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');

  preloader.classList.add('preloader-hidden');
  document.body.classList.remove('no-scroll');
  
  setTimeout(() => {
    preloader.remove();
  }, 500);

});

// fallback
setTimeout(() => {
  const preloader = document.getElementById('preloader');
  if (!preloader.classList.contains('preloader-hidden')) {
    preloader.classList.add('preloader-hidden');
    document.body.classList.remove('no-scroll');
  }
}, 5000);

$(function() {

    gsap.registerPlugin(ScrollTrigger);
    
    const mm = gsap.matchMedia();
    
    // const heroAnimationFallback = Boolean(window.JET24HeroAnimationFallback);
    // const heroAircraft = document.querySelector(".hero__obj");
    // const heroAircraftEntry = document.querySelector(".hero__obj-entry");
    // let heroAircraftEntranceStarted = false;
    // let heroAircraftEntranceQueued = false;
    
    const header = document.querySelector(".header");
    const syncScrolledHeader = () => {
      const isDesktop = window.matchMedia("(min-width: 769px)").matches;
      header?.classList.toggle("header--scrolled", isDesktop && window.scrollY > 0 && !header.classList.contains("open"));
    };
    
    syncScrolledHeader();
    window.addEventListener("scroll", syncScrolledHeader, { passive: true });
    window.addEventListener("resize", syncScrolledHeader);
    
    // const startHeroAircraftEntrance = () => {
    //   if (!heroAircraft || !heroAircraftEntry || heroAircraftEntranceStarted) {
    //     return;
    //   }
    
    //   heroAircraftEntranceStarted = true;
    
    //   gsap.fromTo(heroAircraftEntry,
    //     {
    //       x: window.matchMedia("(max-width: 767px)").matches ? 280 : 750,
    //     },
    //     {
    //       x: 0,
    //       delay: 0.35,
    //       duration: 2.8,
    //       ease: "power2.out",
    //     }
    //   );
    // };
    
    // const queueHeroAircraftEntrance = async () => {
    //   if (!heroAircraft || !heroAircraftEntry || heroAircraftEntranceQueued) {
    //     return;
    //   }
    
    //   heroAircraftEntranceQueued = true;
    
    //   if (typeof heroAircraft.decode === "function") {
    //     try {
    //       await heroAircraft.decode();
    //     } catch (error) {
    //       // The load/error handlers below still provide a visible fallback.
    //     }
    //   }
    
    //   document.querySelector(".hero")?.classList.add("hero--aircraft-ready");
    
    //   window.requestAnimationFrame(() => {
    //     window.requestAnimationFrame(startHeroAircraftEntrance);
    //   });
    // };
    
    mm.add("(min-width: 768px)", () => {
    
      gsap.from(".hero__obj-entry", {
        x: 2000, 
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top bottom",
          end: "bottom 60%",
          scrub: 2,
        }
      });
    
      gsap.from(".hero__clouds", {
        y: 300,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom 60%",
            scrub: 2
          }
      });
    
    });
    
    mm.add("(max-width: 767px)", () => {
    
      gsap.from(".hero__obj-entry", {
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
    
       gsap.from(".hero__clouds", {
        y: 100,
        ease: "none",
        scrollTrigger: {
            trigger: ".hero",
            start: "top top",
            end: "bottom 60%",
            scrub: 2
          }
      });
    
    });
    
    
    
    
    
    
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
    
    // const revealHero = () => {
    //   const hero = document.querySelector(".hero");
    //   hero?.classList.add("hero--animations-ready");
    
    //   if (heroAircraft?.complete && heroAircraft.naturalWidth > 0) {
    //     queueHeroAircraftEntrance();
    //   }
    // };
    
    // heroAircraft?.addEventListener("load", () => {
    //   if (document.querySelector(".hero")?.classList.contains("hero--animations-ready")) {
    //     queueHeroAircraftEntrance();
    //   }
    // }, { once: true });
    
    // heroAircraft?.addEventListener("error", () => {
    //   document.querySelector(".hero")?.classList.add("hero--aircraft-ready");
    // }, { once: true });
    
    // if (heroAnimationFallback) {
    //   revealHero();
    // } else {
    //   window.clearTimeout(window.JET24HeroFallbackTimer);
    //   window.requestAnimationFrame(revealHero);
    // }
    
    // if ("scrollRestoration" in history) {
    //   history.scrollRestoration = "manual";
    // }
    
    window.addEventListener("load", () => {
      ScrollTrigger.refresh();
    });
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

});