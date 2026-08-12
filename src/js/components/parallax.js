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

  gsap.from(".hero__clouds", {
    y: 500,
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

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});