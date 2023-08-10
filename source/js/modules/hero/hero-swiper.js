import Swiper from '../../vendor/swiper.js';

const Backgrounds = ['caucasus', 'kamchatka', 'altai'];

const heroSwiper = new Swiper('.hero__swiper', {
  cssMode: true,
  speed: 300,
  parallax: true,
  direction: 'horizontal',
  loop: true,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

heroSwiper.on('slideChange', function () {
  const heroHeaderWrapper = document.querySelector('.hero-header-wrapper');
  if (this.activeIndex <= Backgrounds.length) {
    heroHeaderWrapper.dataset.background = Backgrounds[this.activeIndex - 1];
  } else {
    heroHeaderWrapper.dataset.background = Backgrounds[0];
  }
});
