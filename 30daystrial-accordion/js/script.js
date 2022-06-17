$(document).ready(function () {

  // トグル
  $('.qa .question').click(function(){

    var index = $('.qa .question').index(this);

    $(this).find('.toggle').children().toggle();
    $('.answer').eq(index).slideToggle();
    $('.answer').eq(index).css('display', 'flex');
  });

  // トグル
  $('.about .about-heading').click(function(){

    var index = $('.about .about-heading').index(this);

    $(this).find('.toggle').children().toggle();
    $('.description').eq(index).slideToggle();
  });
});