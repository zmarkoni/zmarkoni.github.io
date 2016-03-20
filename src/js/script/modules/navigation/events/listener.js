//Listener izvrsava ono sto cuje

var Events = function() {

  myEmitter.on('testEmit', function(test) {
      // new NotifUserLevelChanged(test);
    console.log('emit: ' + test);
  });

  // $("body").on("change", ".js_select_notifications_types", NotificationsList);

}

module.exports = Events;