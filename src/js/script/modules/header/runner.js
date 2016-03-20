var Events = require('./events/listener.js');
var HeaderManager = require('./models/header-manager-new.js');

var headerRunner = function() {

    new HeaderManager().fixHeaderHeight();
    new Events(); // init LISTENER

};
module.exports = headerRunner;