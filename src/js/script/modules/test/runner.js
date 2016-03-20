// var Events = require('./events/listener.js');
var inherits = require('inherits');
var EventEmitter = require('events').EventEmitter;
var Events = require('./events/listener.js');
var Model = require('./models/module-revealing.js');


var testRunner = function() { //ne mogu da stavim ime funkcije!

    var testModule = Model();

    console.log(testModule.greetings);

    testModule.setName("Jelena");
    testModule.getName();
    testModule.updatePlaceholder('Hello from testModule !!!!!!!!!!!!!!!!')

    console.log('Runner');

    //emiter
    myEmitter = new EventEmitter();
    Events(); //dovukao je kod iz listenera :)
    myEmitter.emit('testEmit', testModule.greetings);


}

inherits(testRunner, EventEmitter);
module.exports = testRunner;
