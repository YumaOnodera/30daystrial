$(document).ready(function () {
    $('a[href^="#"]').click(function() {
        var speed = 400;
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $('html, body').animate({scrollTop: position}, speed, 'swing');
        return false;
    });

    $(window).on("scroll", function() {
        if ($(this).scrollTop() > 500) {
          $('.totop').fadeIn();
        } 
        else {
          $('.totop').fadeOut();
        }
    });
});