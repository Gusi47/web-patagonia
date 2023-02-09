var swiper = new Swiper(".swiper", {
    effect: "cube",
    grabCursor: true,
    loop: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 60,
      shadowScale: 1,
    },
    pagination: {
      el: ".swiper-pagination",
    },
});