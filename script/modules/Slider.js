const homeSliderBanner = new Swiper("#home-slider-banner", {
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const homeSliderSale = new Swiper("#home-slider-sale", {
  loop: true,
  slidesPerView: 4,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  },
});
// const serviceSlider = new Swiper(".service-slider", {
//   loop: true,
//   autoplay: true,
//   speed: 400,
//   centeredSlides: true,
//   spaceBetween: 50,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     992: {
//       slidesPerView: 3,
//     },
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
export {homeSliderBanner, homeSliderSale};
