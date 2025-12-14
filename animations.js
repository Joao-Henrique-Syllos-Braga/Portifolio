gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

ScrollSmoother.create({
  smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
  effects: true, // looks for data-speed and data-lag attributes on elements
  smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
});

gsap.from(".minhaImagem", {
  yPercent: 20,
  opacity: 0,
  stagger: 0.05,
  duration: 1,
});

SplitText.create(".hero", {
  type: "chars, words",
  autoSplit: true,
  onSplit(self) {
    gsap.from(self.words, {
      yPercent: 100,
      opacity: 0,
      stagger: 0.05,
      duration: 1,
    });
  },
});

SplitText.create(".about", {
  type: "words",
  onSplit(self) {
    gsap.from(self.words, {
      scrollTrigger: {
        trigger: ".about",
        start: "0% 80%",
        end: "50% 50%",
        markers: true,
      },
      yPercent: 100,
      opacity: 0,
      stagger: 0.02,
      duration: 0.2,
    });
  },
});

SplitText.create(".skills-title", {
  type: "words",
  onSplit(self) {
    gsap.from(self.words, {
      scrollTrigger: {
        trigger: ".skills",
        start: "30% 80%",
        end: "50% 50%",
        markers: true,
      },
      y: 100,
      stagger: 0.05,
      opacity: 0,
      duration: 0.5,
    });
  },
});

gsap.fromTo(
  ".skill-tag",
  { y: 100, opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".skills",
      start: "40% 80%",
      end: "60% 50%",
      markers: true,
    },
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.05,
    clearProps: "transform",
  }
);
