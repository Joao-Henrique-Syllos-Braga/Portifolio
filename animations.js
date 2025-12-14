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
        end: "30% 50%",
        markers: true,
        scrub: 1,
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
        start: "20% 80%",
        end: "40% 50%",
        markers: true,
        scrub: 1,
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
      start: "30% 80%",
      end: "40% 50%",
      markers: true,
      scrub: 1,
    },
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.05,
    clearProps: "transform",
  }
);

SplitText.create(".projects-title", {
  type: "words",
  onSplit(self) {
    gsap.from(self.words, {
      scrollTrigger: {
        trigger: ".projects",
        start: "5%, 80%",
        end: "15% 50%",
        markers: true,
        scrub: 1,
      },
      y: 100,
      duration: 0.5,
      opacity: 0,
    });
  },
});

gsap.from(".carousel", {
  scrollTrigger: {
    trigger: ".projects",
    start: "7%, 80%",
    end: "16% 50%",
    markers: true,
    scrub: 1,
  },
  duration: 0.5,
  opacity: 0,
});

SplitText.create(".contact-title", {
  type: "words",
  onSplit(self) {
    gsap.set(self.words, {
      color: "var(--text-inverse)",
    });
    gsap.from(self.words, {
      scrollTrigger: {
        trigger: ".contact",
        start: "10%, 80%",
        end: "30% 50%",
        markers: true,
        scrub: 1,
      },
      y: 100,
      duration: 0.5,
      opacity: 0,
    });
  },
});

gsap.fromTo(
  ".rede",
  { y: 100, opacity: 0 },
  {
    scrollTrigger: {
      trigger: ".contact",
      start: "10% 80%",
      end: "30% 50%",
      markers: true,
      scrub: 1,
    },
    y: 0,
    opacity: 1,
    duration: 0.5,
    stagger: 0.05,
    clearProps: "transform",
  }
);

gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact",
    start: "10%, 80%",
    end: "30% 50%",
    markers: true,
    scrub: 1,
  },
  duration: 1,
  opacity: 0,
});
