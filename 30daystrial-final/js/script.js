$(document).ready(function () {

  // wowの利用宣言
  new WOW().init();

  // スマホメニューの開閉
  $(".offcanvas-right").hiraku({
    btn:"#offcanvas-btn-right",
    direction:"right"
  });

  // スマホメニューを開くとき
  $('.hiraku-open-btn').click(function() {

    // ヘッダーの表示を切り替える
    $('header').css('background-color', 'rgba(62, 62, 62, 0.7)');
    $('.hiraku-open-btn').css('margin-left', '81.39px');
    $('.open-btn').hide();
    $('.close-btn').show();
  });

  // スマホメニューを閉じるとき
  $(document).click(function(event) {
    if(!$(event.target).closest('.offcanvas-right').length 
    && !$(event.target).closest('.hiraku-open-btn').length) {

      // ヘッダーの表示を切り替える
      $('header').removeAttr('style');
      $('.hiraku-open-btn').removeAttr('style');
      $('.open-btn').show();
      $('.close-btn').hide();
    }
  });

  // リンクを押したとき
  $('a[href^="#"]').click(function() {

    // 画面のロックを解除する
    $('body').css('position', 'static');
    $('body').css('overflow', 'scroll');
    $('body').css('overflow-y', 'scroll');

    // メニューを閉じる
    $('.js-hiraku-offcanvas-open').hide();
    $('.js-hiraku-offcanvas-body-right').removeAttr('style');
    
    // ヘッダーの表示を切り替える
    $('header').removeAttr('style');
    $('.hiraku-open-btn').removeAttr('style');
    $('.open-btn').show();
    $('.close-btn').hide();

    // classを初期化する
    $('body').removeClass('js-hiraku-offcanvas-body-right');
    $('.hiraku-open-btn').removeClass('js-hiraku-offcanvas-btn-active');
    $('.hiraku-open-btn').attr({'aria-expanded' : 'false'});
    $('.js-hiraku-offcanvas').removeClass('js-hiraku-offcanvas-open');
    $('.js-hiraku-offcanvas-sidebar').removeClass('active');

    // styleを初期化
    $('html').removeAttr('style');
    $('body').removeAttr('style');
    $('header').removeAttr('style');
    $('.hiraku-open-btn').removeAttr('style');
    $('.close-btn').removeAttr('style');
    $('.js-hiraku-offcanvas').removeAttr('style');
  });

  // タブ動作
  $('.qa .item').click(function(){

    var index = $('.qa .item').index(this);

    $(this).find('.toggle-open, .toggle-close').toggle();
    $('.answer').eq(index).slideToggle();
  });
});