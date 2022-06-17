var $win = $(window);
var swiper;

// メインビジュアル スライダー
swiper = new Swiper('.landing .swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: true
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

// カード スライダー
$win.on('load resize', function() {
  if (window.matchMedia('(max-width:991px)').matches) {

    swiper = new Swiper('.card .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 1,
      spaceBetween: 0,
      initialSlide: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  } else if (window.matchMedia('(max-width:1199px)').matches) {

    swiper = new Swiper('.card .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 2,
      spaceBetween: 30,
      initialSlide: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
    
  } else {

    swiper = new Swiper('.card .swiper-container', {
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 3,
      spaceBetween: 30,
      initialSlide: 1,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  }
});