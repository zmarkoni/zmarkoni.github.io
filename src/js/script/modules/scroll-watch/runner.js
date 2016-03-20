var Events = require('./events/listener.js');
var Model = require('./models/scroll-watch.js');

var scrollRunner = function() { //ne mogu da stavim ime funkcije!
    new Events();
    new Model();
    console.log('Runner');
}

module.exports = scrollRunner;
