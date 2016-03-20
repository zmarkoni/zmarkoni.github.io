//Listener izvrsava ono sto cuje

var Events = function() {

  myEmitter.on('testEmit', function(test) {
      // new NotifUserLevelChanged(test);
    console.log('emit: ' + test);
  });

  // $("body").on("change", ".js_select_notifications_types", NotificationsList);

}

module.exports = Events;

//
// ;
// define([
//     "evento",
//     "modules/notifications/models/popups/notifications",
//     "modules/notifications/models/systems/user-level-changed",
//     "modules/notifications/models/presenter",
//     "modules/notifications/models/systems/user-status-changed",
//     "modules/notifications/models/systems/user-changed",
//     "modules/notifications/models/systems/photo-status-changed",
//     "modules/notifications/models/regular/regular",
//     "modules/notifications/models/notifications-list"
// ],
// function(
//     Evento,
//     NotificationPopups,
//     NotifUserLevelChanged,
//     Presenter,
//     UserStatusChanged,
//     UserChanged,
//     PhotoStatusChanged,
//     RegularNotification,
//     NotificationsList
// ){
//
//     return function(){
//
//         Evento.on("NOTIFICATIONS|REMOTE|USER_LEVEL_CHANGED", function(){
//             new NotifUserLevelChanged();
//         });
//
//         Evento.on("NOTIFICATIONS|REMOTE|USER_STATUS_CHANGED", function(){
//             new UserStatusChanged();
//         });
//
//         Evento.on("NOTIFICATIONS|REMOTE|USER_PHOTO_STATUS_CHANGED", function(){
//             new PhotoStatusChanged();
//         });
//
//         Evento.on("NOTIFICATIONS|REMOTE|USER_CHANGED", function(){
//             new UserChanged();
//         });
//
//         Evento.on("NOTIFICATIONS|REMOTE|POPUPS", function(notification){
//             new Presenter().stop();
//             new NotificationPopups().display(notification);
//         });
//
//         Evento.on("NOTIFICATIONS|POPUPS|CLOSE", function(){
//             new NotificationPopups().close();
//         });
//
//         Evento.on("NOTIFICATIONS|POPUPS|CLOSED", function(){
//             new Presenter().run();
//         });
//
//         Evento.on("NOTIFICATIONS|LOCAL|MESSAGE", function(notification){
//             new  RegularNotification(notification);
//         });
//
//         Evento.on("NOTIFICATIONS|LOCAL|VISIT", function(notification){
//             new  RegularNotification(notification);
//         });
//
//         Evento.on("NOTIFICATIONS|LOCAL|FRIEND_REQUEST", function(notification){
//             new  RegularNotification(notification);
//         });
//
//         Evento.on("NOTIFICATIONS|LOCAL|FRIEND_REQUEST_ACCEPTED", function(notification){
//             new  RegularNotification(notification);
//         });
//
//         $("body").on("change", ".js_select_notifications_types", NotificationsList);
//     };
// });
