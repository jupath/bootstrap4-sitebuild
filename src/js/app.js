jQuery(document).ready(function($) {
    // SCROLL TO ANCHOR
    $('a[href^="#"]').on('click.smoothscroll', function (event) {
        var $target = $(this.hash);
        event.preventDefault();
        $('html,body').clearQueue().animate({
            scrollTop: $target.offset().top - 58
        }, 900);
    } );

    // Parallax and fade in scroll
    var screenWidth = $(window).width();
    if(screenWidth > 1200) {
        skrollr.init({forceHeight: false});

        $(window).scroll( function(){
            $('.hideme').each( function(i){
                var bottom_of_object = $(this).position().top + $(this).outerHeight();
                var bottom_of_window = $(window).scrollTop() + $(window).height();
                if( bottom_of_window > bottom_of_object ){
                    $(this).animate({'opacity':'1'},1000);
                }
            });
        });
    }

    // Toggle details
    $('.toggle-details').on('click', function(event) {
        event.preventDefault();
        var target = $(this).data('toggle-target');
        $('#details-' + target).toggle('slow');
    });
} );