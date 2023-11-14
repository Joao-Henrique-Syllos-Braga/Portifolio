var swiper = newSwiper(".mySwiper", {
    cssMode: true,
    loop: true,
    navgation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});