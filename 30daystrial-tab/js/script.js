$(document).ready(function () {

  // タブ
  $('.tab .tabbar .tab-item').click(function(){

    var index = $('.tab .tabbar .tab-item').index(this);

    $('.tab-item').removeClass('active');
    $(this).addClass('active');
    $('.item').removeClass('active');
    $('.item').eq(index).addClass('active');
  });
});