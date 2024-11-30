import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const initJuriSwiper = () => {
  new Swiper('.juri__swiper', {
    modules: [ Navigation ],
    slidesPerView: 4,
    spaceBetween: 40,
    simulateTouch: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 2,
        simulateTouch: false
      },
      1366: {
        slidesPerView: 4
      }
    },
    speed: 400,
    navigation: {
      nextEl: '.swiper-button-next--juri',
      prevEl: '.swiper-button-prev--juri',
    },
  });
};

export {initJuriSwiper};
