/**
 * Created by Ivan Opalchuk on 21.03.2018.
 */
(function($) {

    "use strict";
    function handlePreloader() {
        if($('.preloader').length){
            $('.preloader').delay(200).fadeOut(500);
        }
    }
    function headerStyle() {

        var siteHeader = $('.main-header');
        if(siteHeader.length){
            var windowpos = $(window).scrollTop();
            var scrollLink = $('.scroll-to-top');
            if (windowpos >= 250) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }



    headerStyle();

    $(window).on('scroll',headerStyle());
    $(window).on('load',handlePreloader());

})(window.jQuery);