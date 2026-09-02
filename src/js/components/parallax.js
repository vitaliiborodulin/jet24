gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

const heroAnimationFallback = Boolean(window.JET24HeroAnimationFallback);
const heroAircraft = document.querySelector(".hero__obj");
const heroAircraftEntry = document.querySelector(".hero__obj-entry");
let heroAircraftEntranceStarted = false;
let heroAircraftEntranceQueued = false;

const header = document.querySelector(".header");
const syncScrolledHeader = () => {
  const isDesktop = window.matchMedia("(min-width: 769px)").matches;
  header?.classList.toggle("header--scrolled", isDesktop && window.scrollY > 0 && !header.classList.contains("open"));
};

syncScrolledHeader();
window.addEventListener("scroll", syncScrolledHeader, { passive: true });
window.addEventListener("resize", syncScrolledHeader);

const startHeroAircraftEntrance = () => {
  if (!heroAircraft || !heroAircraftEntry || heroAircraftEntranceStarted) {
    return;
  }

  heroAircraftEntranceStarted = true;

  gsap.fromTo(heroAircraftEntry,
    {
      x: window.matchMedia("(max-width: 767px)").matches ? 280 : 750,
    },
    {
      x: 0,
      delay: 0.35,
      duration: 2.8,
      ease: "power2.out",
    }
  );
};

const queueHeroAircraftEntrance = async () => {
  if (!heroAircraft || !heroAircraftEntry || heroAircraftEntranceQueued) {
    return;
  }

  heroAircraftEntranceQueued = true;

  if (typeof heroAircraft.decode === "function") {
    try {
      await heroAircraft.decode();
    } catch (error) {
      // The load/error handlers below still provide a visible fallback.
    }
  }

  document.querySelector(".hero")?.classList.add("hero--aircraft-ready");

  window.requestAnimationFrame(() => {
    window.requestAnimationFrame(startHeroAircraftEntrance);
  });
};

// mm.add("(min-width: 768px)", () => {

//   gsap.from(".hero__obj", {
//     x: 2000, 
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".hero",
//       start: "top bottom",
//       end: "bottom 60%",
//       scrub: 2,
//     }
//   });

//   gsap.from(".hero__clouds", {
//     y: 300,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".hero",
//         start: "top top",
//         end: "bottom 60%",
//         scrub: 2
//       }
//   });

// });

// mm.add("(max-width: 767px)", () => {

//   gsap.from(".hero__obj", {
//       x: 800, 
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".hero",
//         start: "top bottom",
//         end: "bottom 60%",
//         scrub: 2,
//         // markers: true
//       }
//   });

//    gsap.from(".hero__clouds", {
//     y: 100,
//     ease: "none",
//     scrollTrigger: {
//         trigger: ".hero",
//         start: "top top",
//         end: "bottom 60%",
//         scrub: 2
//       }
//   });

// });






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

const revealHero = () => {
  const hero = document.querySelector(".hero");
  hero?.classList.add("hero--animations-ready");

  if (heroAircraft?.complete && heroAircraft.naturalWidth > 0) {
    queueHeroAircraftEntrance();
  }
};

heroAircraft?.addEventListener("load", () => {
  if (document.querySelector(".hero")?.classList.contains("hero--animations-ready")) {
    queueHeroAircraftEntrance();
  }
}, { once: true });

heroAircraft?.addEventListener("error", () => {
  document.querySelector(".hero")?.classList.add("hero--aircraft-ready");
}, { once: true });

if (heroAnimationFallback) {
  revealHero();
} else {
  window.clearTimeout(window.JET24HeroFallbackTimer);
  window.requestAnimationFrame(revealHero);
}



// window.addEventListener("load", () => {
//   ScrollTrigger.refresh();
// });