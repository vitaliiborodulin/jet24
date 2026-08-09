gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add("(min-width: 768px)", () => {
  gsap.from(".hero__obj", {
    x: 2000, 
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
      x: 300, 
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

