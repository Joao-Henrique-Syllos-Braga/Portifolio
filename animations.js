gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

/* ============================= */
/* SCROLL SMOOTHER (DESKTOP ONLY) */
/* ============================= */

// Guarda a instância do ScrollSmoother
const smoother = ScrollSmoother.create({
  smooth: 1,
  effects: true,
  smoothTouch: false // desliga smoothing em touch (muito importante)
});

/* ============================= */
/* HERO IMAGE */
/* ============================= */
gsap.from(".minhaImagem", {
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

/* ============================= */
/* HERO TEXT */
/* ============================= */
const heroSplit = new SplitText(".hero-title, .hero-desc", {
  type: "words"
});

gsap.from(heroSplit.words, {
  yPercent: 100,
  opacity: 0,
  stagger: 0.05,
  duration: 1,
  ease: "power3.out"
});

/* ============================= */
/* ABOUT */
/* ============================= */
const aboutSplit = new SplitText(".about-text", {
  type: "words"
});

gsap.from(aboutSplit.words, {
  scrollTrigger: {
    trigger: ".about",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 60,
  opacity: 0,
  stagger: 0.02,
  duration: 0.6,
  ease: "power2.out"
});

/* ============================= */
/* SKILLS TITLE */
/* ============================= */
const skillsTitleSplit = new SplitText(".skills-title", {
  type: "words"
});

gsap.from(skillsTitleSplit.words, {
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 60,
  opacity: 0,
  stagger: 0.05,
  duration: 0.6,
  ease: "power2.out"
});

/* ============================= */
/* SKILLS TAGS */
/* ============================= */
gsap.from(".skill-tag", {
  scrollTrigger: {
    trigger: ".skills-list",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  y: 40,
  opacity: 0,
  stagger: 0.05,
  duration: 0.5,
  ease: "power2.out"
});

/* ============================= */
/* PROJECTS TITLE */
/* ============================= */
const projectsTitleSplit = new SplitText(".projects-title", {
  type: "words"
});

gsap.from(projectsTitleSplit.words, {
  scrollTrigger: {
    trigger: ".projects",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 60,
  opacity: 0,
  stagger: 0.05,
  duration: 0.6,
  ease: "power2.out"
});

/* ============================= */
/* CAROUSEL */
/* ============================= */
gsap.from(".carousel", {
  scrollTrigger: {
    trigger: ".carousel",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  opacity: 0,
  y: 40,
  duration: 0.6,
  ease: "power2.out"
});

/* ============================= */
/* CONTACT TITLE */
/* ============================= */
const contactSplit = new SplitText(".contact-title", {
  type: "words"
});

gsap.from(contactSplit.words, {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 80%",
    toggleActions: "play none none reverse"
  },
  y: 60,
  opacity: 0,
  stagger: 0.05,
  duration: 0.6,
  ease: "power2.out"
});

/* ============================= */
/* SOCIAL ICONS */
/* ============================= */
gsap.from(".rede-contact", {
  scrollTrigger: {
    trigger: ".contact",
    start: "top 75%",
    toggleActions: "play none none reverse"
  },
  y: 40,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  ease: "power2.out"
});

/* ============================= */
/* CONTACT FORM */
/* ============================= */
gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-form",
    start: "top 95%",
    toggleActions: "play none none reverse"
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power3.out"
});

/* ============================= */
/* ANCORAS COM SCROLL SUAVE */
/* ============================= */

// Scroll suave para links internos sem quebrar o ScrollTrigger
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute("href");
    smoother.scrollTo(target, true);
  });
});

/* ============================= */
/* SUPORTE PARA LINK DIRETO COM HASH */
/* EX: seusite.com/#contact */
/* ============================= */

window.addEventListener("load", () => {
  if (window.location.hash) {
    smoother.scrollTo(window.location.hash, true);
  }
});
