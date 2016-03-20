var $ = require('jquery');
var skrollr = require('skrollr');


var headerManager = function() {};

headerManager.prototype = {
    scrollHeader: function() {
        // if (docWidth1 > 640) {
        var parallax = $('.parallax');
        var st = $(window).scrollTop(); //documentElement.scrollTop
        parallax.css({
            '-webkit-transform': 'translateY(' + -st / 3 + 'px)',
            '-ms-transform': 'translateY(' + -st / 3 + 'px)',
            'transform': 'translateY(' + -st / 3 + 'px)'
        });
        //}
    },
    fixHeaderHeight: function() {
        var windowHeight = $(window).height();
        $('.page_header').css({
            height: windowHeight
        });
        $('.header_bg').css({
            height: windowHeight
        });
    }
};

module.exports = headerManager;