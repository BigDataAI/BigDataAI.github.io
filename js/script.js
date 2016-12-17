(function($) {
    'use strict';
    
    // Easing
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });
    
    // Adjust logo based on scroll
    $(document).scroll(function(){
        var logo = $('.logo');
        var top = $('body').scrollTop();
        var bodyWidth = $('body').width();
        if(bodyWidth >= 768) {
            if(top > 0) {
                logo.height(35);
                logo.css({'marginTop': '-7px'});
            } else {
                logo.height(45);
                logo.css({'marginTop': '0px'});
            }
        }
        
    });
    
    // Change opacity when hover over network
    $('.network').hover(function(){
        var isHovered = $(this).is(":hover");
        if(isHovered) {
            $(this).css({'opacity': '0.4'});
        } else {
            $(this).css({'opacity': '0.2'});
        }
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    });

})(jQuery);
