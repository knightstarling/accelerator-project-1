import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const initReviewsSwiper = () => {
  new Swiper('.reviews__swiper', {
    modules: [ Navigation ],
    slidesPerView: 1,
    spaceBetween: 40,
    simulateTouch: true,
    breakpoints: {
      768: {
        simulateTouch: false
      }
    },
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next--reviews',
      prevEl: '.swiper-button-prev--reviews',
    },
  });
};

export {initReviewsSwiper};
