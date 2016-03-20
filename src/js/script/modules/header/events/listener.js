var HeaderManager = require('../models/header-manager-new.js');

//Listener izvrsava ono sto cuje
var Events = function() {
    //Listeners
    $(window).on('scroll', function() {
        new HeaderManager().scrollHeader();
    });

    $(window).on('resize', function() {
        new HeaderManager().fixHeaderHeight();
    });

    //moze i TRIGER kad nesto odmah hocu da se desi

  // $("body").on("change", ".js_select_notifications_types", NotificationsList);

};

module.exports = Events;