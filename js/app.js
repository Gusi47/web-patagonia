

const swiper = new Swiper(".swiper", {
  // Optional parameters
  slidesPerView: 1,
  loop: true,

  spaceBetween: 10,

  effect: "fade",

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },
 
});