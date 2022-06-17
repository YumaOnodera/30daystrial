$(document).ready(function () {

  // wowの利用宣言
  new WOW().init();

  // ドロワーメニューの利用宣言
  $('.drawer').drawer();

  // ナビゲーション
  $('header .nav-link').click(function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });
});