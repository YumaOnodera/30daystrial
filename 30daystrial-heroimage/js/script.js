$(document).ready(function () {
    $(document).on("click", ".menu", function(){
        $('.helo').stop().slideToggle();
        $('.menu__line').toggleClass('active');
        if ($('.menu').attr('aria-expanded') === 'false') {
            $(this).css('position','fixed');
            if (window.matchMedia('(max-width:575px)').matches) {
                $(this).css('top','17px');
                $(this).css('-webkit-transform','translateY(0)');
                $(this).css('transform','translateY(0)');
                $(this).attr({'aria-expanded' : 'true'});
            }
            else {
                $(this).css('top','27px');
                $(this).css('-webkit-transform','translateY(0)');
                $(this).css('transform','translateY(0)');
                $(this).attr({'aria-expanded' : 'true'});
            }
        }
        else {
            $(this).css('position','absolute');
            $(this).css('top','50%');
            $(this).css('-webkit-transform','translateY(-50%)');
            $(this).css('transform','translateY(-50%)');
            $(this).attr({'aria-expanded' : 'false'});
        }
    });
    $(document).on("click", ".nav-link", function(){
        $('.helo').slideToggle();
        $('.menu__line').toggleClass('active');
        $('.menu').css('position','absolute');
        $('.menu').css('top','50%');
        $('.menu').css('-webkit-transform','translateY(-50%)');
        $('.menu').css('transform','translateY(-50%)');
        $('.menu').attr({'aria-expanded' : 'false'});
    });
});