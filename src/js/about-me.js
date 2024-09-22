import Accordion from 'accordion-js';
import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

new Accordion('.accordion-container', {
  showMultiple: true,
  openOnInit: [0],
});

new Swiper('#about-me .swiper', {
  modules: [Keyboard, Navigation, Mousewheel],
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  allowSlidePrev: false,
  speed: 600,
  edgeSwipeDetection: true,
  updateOnWindowResize: true,
  keyboard: true,
  mousewheel: true,
  slideActiveClass: 'skills-active-slide',
  navigation: {
    nextEl: '.swiper-button-next',
  },
  on: {
    keyPress: onMyKeyPress,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

function onMyKeyPress(swiper, keyCode) {
  switch (keyCode) {
    case 9: //Tab
      swiper.slideNext();
      break;
  }
}
