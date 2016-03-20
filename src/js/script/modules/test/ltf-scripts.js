/* Custom LTF Scripts  */

var ltf = ltf || {},
    docWidth = 0,
    currentLink = '';

jQuery(document).ready(function() {
    var docWidth1 = document.body.clientWidth;

    /*Hide Search bar in mobile phone browser*/
    /*
    if (docWidth1 < 641) { //mobile
        
        window.addEventListener("load", function() {
            // Set a timeout...
            setTimeout(function() {
                // Hide the address bar!
                window.scrollTo(0, 1);
            }, 0);
        });
    } 
    */
        
    //Navigation
    //If we have custom links in navigation then we need this code
    
    jQuery("#menu-main-navigation .contact_button").removeClass("current-menu-item");
    jQuery("#menu-main-navigation .about_button").removeClass("current-menu-item");

    jQuery("#menu-main-navigation .about_button > a").on('click', function() {
        // e.preventDefault();
        if (docWidth1 < 641) { //if is mobile
            jQuery('body').animate({
                scrollTop: jQuery("#about").offset().top // - 101
            }, 2000);
        } else {
            //alert('about');
            jQuery(".contact_button").removeClass("current-menu-item");
            jQuery(".about_button").addClass("current-menu-item");

            jQuery('body').animate({
                scrollTop: jQuery(".home .page-wrapper").offset().top
            }, 2000);
        }
    });

    jQuery("#menu-main-navigation .contact_button > a").on('click', function(e) {
        e.preventDefault();
        //alert('contact');
        jQuery(".about_button").removeClass("current-menu-item");
        jQuery(".contact_button").addClass("current-menu-item");
        if (docWidth1 < 641) { //if is mobile
            jQuery('body').animate({
                scrollTop: jQuery("#contact").offset().top - 101
            }, 2000);
        } else {
            jQuery('body').animate({
                scrollTop: jQuery("#contact").offset().top
            }, 2000);
        }
    });
    
    if (docWidth1 > 641) {
        jQuery(".bootom_banner_arrow").on('click', function() {
            jQuery('body').animate({
                scrollTop: jQuery(".page-wrapper").offset().top
            }, 2000);
        });
    }


    /* ============ Main Slider in page header ================= */

    //Turn on Sequence slider
    
    if (jQuery('#section0').length > 0) {
        //alert('sequence');
        //Section0
        //Sequence slider using sequence.js and sequence.css
        var options = {
            reverseAnimationsWhenNavigatingBackwards: false,
            preventDelayWhenReversingAnimations: true,
            animateStartingFrameIn: true,
            fadeFrameWhenSkipped: false,
            nextButton: true,
            prevButton: true
        };
        var sequence = jQuery("#section0").sequence(options).data("sequence");
        
        /*
        sliderSequence.afterLoaded = function() {
             
         }
         */
        
        jQuery('#section0 .slide1 .responsive_image').addClass('slide1_bg');
    }
    
   
    //var sequence = jQuery("#section0").sequence().data("sequence");
    
    /* ============ End of Main Slider in page header ================= */

    //Nice Scroll wor browser
    jQuery("html").niceScroll({styler: "fb", cursorcolor: "#000"});

    if (docWidth1 > 640) {
        jQuery('#better_solution_parallax').sticky_div();
    }

    //Parallax header image
    var parallax = jQuery('.parallax');

    if (docWidth1 > 640) {
        jQuery(window).scroll(function() {
            var st = jQuery(window).scrollTop();//documentElement.scrollTop

            parallax.css({
                '-webkit-transform': 'translateY(' + -st / 3 + 'px)',
                '-ms-transform': 'translateY(' + -st / 3 + 'px)',
                'transform': 'translateY(' + -st / 3 + 'px)'
            });
        });

        //start animatrion for Aproach page
        if (('#approach').length > 0) {
            setTimeout(function() {
                approachAnimate();
            }, 1000);
        }

        //start animatrion for Services page
        if (('#services').length > 0) {
            setTimeout(function() {
                servicesAnimate();
            }, 500);
            
        }
    }

    if (('#outsourcing').length > 0) {
        outsourcingAnimate();
    }

    //contact form
    if (docWidth1 > 1024) { //desktop
        jQuery(".fancybox").fancybox({
            autoSize: false,
            scrolling: 'no',
            wrapCSS: true,
            fitToView: false,
            width: 1300,
            height: 850,
            helpers: {
                title: {
                    type: null
                },
                overlay: {
                    speedIn: 250,
                    speedOut: 250
                }
            }
        });
    } else if (docWidth1 > 640 && docWidth1 <= 1024) { //tablet
        jQuery(".fancybox").fancybox({
            autoSize: false,
            scrolling: 'no',
            wrapCSS: true,
            fitToView: false,
            width: 768,
            height: 850,
            helpers: {
                title: {
                    type: null
                },
                overlay: {
                    speedIn: 250,
                    speedOut: 250
                }
            }
        });
    }

    /*questionary page */

    jQuery('#questionnaire .panel-collapse .continue').click(function(e) {
        e.preventDefault();
        
        var nextCollapse = jQuery(this).attr('href');
        
        jQuery('#questionnaire .panel-collapse').each(function() {
            if (jQuery(this).hasClass('in')) {
                jQuery(this).collapse('hide');
                if (docWidth1 < 641){
                    jQuery("body").animate({scrollTop: 0}, 300);
                }
            }
        });

        setTimeout(function() {
            var nextPanel = jQuery(nextCollapse).parent();
            //console.log(nextPanel);
            //console.log(nextPanel.offset().top);
            if (docWidth1 > 640){
                jQuery('body').animate({
                    scrollTop: nextPanel.offset().top - 60
                }, 1000); 
            }else{
                jQuery('body').animate({
                    scrollTop: nextPanel.offset().top - 101
                }, 1000); 
            }
            setTimeout(function() {
                jQuery(nextCollapse).collapse('show');
            }, 500);
        }, 500);
    
    });

    jQuery('.button_submit .wpcf7-submit').click(function() {
        if (jQuery('.wpcf7-validation-errors').length > 0) {
            //alert('error');
            jQuery('.panel-collapse').collapse('show');

            jQuery("body").animate({scrollTop: 0}, 600);
        }
    });

});//jQuery(document).ready

function approachAnimate() {

    jQuery(window).bind("scroll", function() {
        jQuery("#approach-wrapper:in-viewport").each(function() {
            //alert('in view');
            //alert(docWidth);
            if (docWidth > 1024) {
                jQuery("#plan").delay(300).queue(function(next) {
                    jQuery(this).addClass("animate");
                    next();
                });
                jQuery("#design").delay(600).queue(function(next) {
                    jQuery(this).addClass("animate");
                    next();
                });
                jQuery("#develop").delay(900).queue(function(next) {
                    jQuery(this).addClass("animate");
                    next();
                });
                jQuery("#launch").delay(1200).queue(function(next) {
                    jQuery(this).addClass("animate");
                    next();
                });
            } else {
                //alert('zzz');
                jQuery("#plan").delay(600).queue(function(next) {
                    jQuery(this).addClass("animate");
                    next();
                });

                jQuery("#design").delay(600).queue(function(next) {
                    jQuery(this).addClass("animate");
                    next();
                });

                jQuery("#develop").delay(600).queue(function(next) {
                    jQuery(this).addClass("animate");
                    next();
                });

                jQuery("#launch").delay(600).queue(function(next) {
                    jQuery(this).addClass("animate");
                    next();
                });
            }

        });
    });
}

function servicesAnimate() {
    //alert('zzz');
    //alert(docWidth);
    if (docWidth > 1024) {
        jQuery("#services .icon1").delay(300).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });
        jQuery("#services .icon2").delay(600).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });
        jQuery("#services .icon3").delay(600).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });
        jQuery("#services .icon4").delay(600).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });
        jQuery("#services .icon5").delay(300).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });
    } else {
        //alert('ltf');
        jQuery("#services .icon1").delay(300).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });

        jQuery("#services .icon2").delay(600).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });

        jQuery("#services .icon3").delay(600).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });

        jQuery("#services .icon4").delay(600).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });

        jQuery("#services .icon5").delay(300).queue(function(next) {
            jQuery(this).addClass("animate");
            next();
        });
    }
}

function outsourcingAnimate() {
    jQuery("#outsourcing .outsourcing_text1").delay(300).queue(function(next) {
        jQuery(this).addClass("animate");
        next();
    });
}

//close fancy box after contact form send
function closeFancybox() {
    //jQuery.fancybox.close() 
    setTimeout(function() {
        parent.jQuery.fancybox.close();
    }, 1000);

}