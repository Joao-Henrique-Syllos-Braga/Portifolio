const toggle = document.getElementById("toggle");
const toggleBall = document.getElementById("toggle-ball");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
});

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-track]");
  const slides = Array.from(track.children);
  const btnPrev = carousel.querySelector("[data-prev]");
  const btnNext = carousel.querySelector("[data-next]");
  const dotsWrap = carousel.querySelector("[data-dots]");

  let index = 0;

  // cria bolinhas automaticamente
  dotsWrap.innerHTML = slides
    .map((_, i) => `<button class="dot" data-dot="${i}" aria-label="Ir para slide ${i + 1}"></button>`)
    .join("");

  const dots = Array.from(dotsWrap.querySelectorAll(".dot"));

  function update() {
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((d) => d.classList.remove("active"));
    if (dots[index]) dots[index].classList.add("active");
  }

  function next() {
    index = (index + 1) % slides.length;
    update();
  }

  function prev() {
    index = (index - 1 + slides.length) % slides.length;
    update();
  }

  btnNext.addEventListener("click", next);
  btnPrev.addEventListener("click", prev);

  dotsWrap.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-dot]");
    if (!btn) return;
    index = Number(btn.dataset.dot);
    update();
  });

  // inicia
  update();
});
