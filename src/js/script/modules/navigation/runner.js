window.jQuery = $ = require('jquery');
var jQuery = require("jquery-easing");
var bs = require('bootstrap/dist/js/bootstrap');//mogu i da ucitam samo potreban bootsrap js plugin
var smoothScroll = require("jquery-smooth-scroll");

var navigationRunner = function() { //ne mogu da stavim ime funkcije!


    /* NAVIGATION FUNCTIONS */
    //jQuery to collapse the navbar on scroll
    // $(window).scroll(function() {
    //     if ($(".navbar").offset().top > 50) {
    //         $(".navbar-fixed-top").addClass("top-nav-collapse");
    //     } else {
    //         $(".navbar-fixed-top").removeClass("top-nav-collapse");
    //     }
    // });

    // $(window).on('resize', function() {
    //     lnStickyNavigation = $('.scroll_down').offset().top;
    //     console.log('scroll offset: ' + lnStickyNavigation);
    // });

    function scrollToSection() {
        $(this).smoothScroll({
            afterScroll: function() {
                //console.log('smoothScroll works!');
                //window.location.hash = $(this).attr('href');
            }
        });
    }

    function mobileNavigation() {
        $('.navbar-collapse').removeClass('in').addClass('collapse');
    }

    function scrollSpy() {
        $("#navbar-example").scrollspy();
        $('#navbar-example').on('activate.bs.scrollspy', function() {
            // debugger;
            window.location.hash = $('.nav .active a').attr('href').replace('#', '#/');
        });
    }

    function stickyNavigation() {
        lnStickyNavigation = $('.js_scroll_down').offset().top + 20;
        if ($(window).scrollTop() > lnStickyNavigation) {
            $('.js_header').addClass('fixed');
        } else {
            $('.js_header').removeClass('fixed');
        }
    }

    // call all FUNCTIONS
    $('body').on('click', '.js_nav_link',  scrollToSection);
    //$('body').on('click', '.js_mobile_menu',  mobileNavigation);
    scrollSpy();
    $(window).scroll(stickyNavigation);
}
module.exports = navigationRunner;