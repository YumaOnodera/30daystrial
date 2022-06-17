var slidesPerView = 2 + 239 / 422;
var mobileSlidesPerView = 1 + 58.5 / 276.45;

var swiper = new Swiper('.swiper-container', {
  loop: true,
  loopAdditionalSlides: 1,
  autoplay: {
    delay: 3000,
    disableOnInteraction: true
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  slidesPerView: slidesPerView,
  spaceBetween: 40,
  width: 1163,
  breakpoints: {
    // 縦向きモバイル, 991px 以下
    767: {
      slidesPerView: mobileSlidesPerView,
      spaceBetween: 24.5,
      width: 359
    }
  }
});