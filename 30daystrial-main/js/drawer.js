$(document).ready(function () {
    if (window.matchMedia('(max-width:575px)').matches) {
        $(document).on("click", ".drawer-hamburger", function(){
            if ($('.drawer-toggle').attr('aria-expanded') === 'false') {
                $('.drawer-hamburger').css('right','218.37px');
                $('.drawer-hamburger').css('margin-right','0');
                $('.drawer-hamburger-icon').css('background-color','transparent');
                $('.drawer-toggle').attr({'aria-expanded' : 'true'});
            }
            else {
                $('.drawer-hamburger').css('right','0');
                $('.drawer-hamburger').css('margin-right','18.69px');
                $('.drawer-hamburger-icon').css('background-color','#FFFFFF');
                $('.drawer-toggle').attr({'aria-expanded' : 'false'});
            }
        });
        $(document).on("click", ".drawer-overlay", function(){
            $('.drawer-hamburger').css('right','0');
            $('.drawer-hamburger').css('margin-right','18.69px');
            $('.drawer-hamburger-icon').css('background-color','#FFFFFF');
            $('.drawer-toggle').attr({'aria-expanded' : 'false'});
        });
        $(document).on("click", ".drawer-menu-item", function(){
            $('.drawer').drawer('close');
            $('.drawer-hamburger').css('right','0');
            $('.drawer-hamburger').css('margin-right','18.69px');
            $('.drawer-hamburger-icon').css('background-color','#FFFFFF');
            $('.drawer-toggle').attr({'aria-expanded' : 'false'});
        });
    }
    else {
        $(document).on("click", ".drawer-hamburger", function(){
            if ($('.drawer-toggle').attr('aria-expanded') === 'false') {
                $('.drawer-hamburger').css('right','278.37px');
                $('.drawer-hamburger').css('margin-right','0');
                $('.drawer-hamburger-icon').css('background-color','transparent');
                $('.drawer-toggle').attr({'aria-expanded' : 'true'});
            }
            else {
                $('.drawer-hamburger').css('right','0');
                $('.drawer-hamburger').css('margin-right','18.69px');
                $('.drawer-hamburger-icon').css('background-color','#FFFFFF');
                $('.drawer-toggle').attr({'aria-expanded' : 'false'});
            }
        });
        $(document).on("click", ".drawer-overlay", function(){
            $('.drawer-hamburger').css('right','0');
            $('.drawer-hamburger').css('margin-right','18.69px');
            $('.drawer-hamburger-icon').css('background-color','#FFFFFF');
            $('.drawer-toggle').attr({'aria-expanded' : 'false'});
        });
        $(document).on("click", ".drawer-menu-item", function(){
            $('.drawer').drawer('close');
            $('.drawer-hamburger').css('right','0');
            $('.drawer-hamburger').css('margin-right','18.69px');
            $('.drawer-hamburger-icon').css('background-color','#FFFFFF');
            $('.drawer-toggle').attr({'aria-expanded' : 'false'});
        });
    }
});