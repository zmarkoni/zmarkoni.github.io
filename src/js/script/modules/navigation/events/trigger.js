
var Events = function(){};

Events.prototype = {

};
return Events;

;
define(["evento"], function(Evento){

    var Events = function(){};

    Events.prototype = {

        addNotifNumber: function(type)
        {
            Evento.trigger("NOTIFICATIONS|NUMBER|ADD", type);
        },

        friendsRequestsLoad: function()
        {
            Evento.trigger("FRIENDS|REQUEST|REMOTE|LOAD");
        },

        logout: function()
        {
            Evento.trigger("LOGOUT");
        },

        localNotifShow: function(notification)
        {
            Evento.trigger("NOTIFICATIONS|LOCAL|"+notification.notification_type, notification);
        },

        popupClosed: function()
        {
            Evento.trigger("NOTIFICATIONS|POPUPS|CLOSED");
        },

        remoteNotifAppeared: function(notification)
        {
            Evento.trigger("NOTIFICATIONS|REMOTE|"+notification.notification_type, notification)
        },

        trigger: function(action, args)
        {
            Evento.trigger(action, args);
        },

        updateWidgets: function(notification)
        {
            Evento.trigger("WIDGETS|UPDATE|"+notification.notification_type);
        }

    };

    return Events;
})
