$(document).ready(function () {

  // プライバシーポリシーモーダル
  $('.privacy-policy-link').click(function(){

    // 背景スクロール固定
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -scrollPosition});

    $('.modal-overlay').fadeIn();
    $('.modal-wrapper').fadeIn();

    // モーダル表示時にチェックが入るのを防ぐ
    if ($('#privacy-policy').prop('checked')) {
      $('#privacy-policy').prop('checked', false);
    }
    else {
      $('#privacy-policy').prop('checked', true);
    }
  });

  // プライバシーポリシーモーダル
  $('.close-button, .batsu-button, .modal-overlay').click(function(){

    // 背景スクロール固定解除
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo( 0 , scrollPosition );

    $('.modal-overlay').fadeOut();
    $('.modal-wrapper').fadeOut();
  });
});