import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const initReviewsSwiper = () => {
  new Swiper('.reviews__swiper', {
    modules: [ Navigation ],
    slidesPerView: 1,
    simulateTouch: true,
    breakpoints: {
      768: {
        simulateTouch: false
      }
    },
    speed: 400,
    spaceBetween: 100,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    injectStyles: [
      `
        .swiper-button-next::after,
        .swiper-button-prev::after {
          content: "";
        }
      `,
    ],
  });
};

export {initReviewsSwiper};
