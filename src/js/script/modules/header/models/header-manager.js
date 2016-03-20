var headerManager = function() {

    function fixHeaderHeight() {
        var windowHeight = $(window).height();
        $('.page_header').css({
            height: windowHeight
        });
        $('.header_bg').css({
            height: windowHeight
        });
    };

    function scrollHeader() {
        // if (docWidth1 > 640) {
            var parallax = $('.parallax');
            var st = $(window).scrollTop(); //documentElement.scrollTop
            parallax.css({
                '-webkit-transform': 'translateY(' + -st / 3 + 'px)',
                '-ms-transform': 'translateY(' + -st / 3 + 'px)',
                'transform': 'translateY(' + -st / 3 + 'px)'
            });
        //}
    };

    return {
        scrollHeader: scrollHeader,
        fixHeaderHeight: fixHeaderHeight
    }

};

module.exports = headerManager;