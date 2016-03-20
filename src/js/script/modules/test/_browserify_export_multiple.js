//https://lincolnloop.com/blog/untangle-your-javascript-browserify/
//Exporting multiple things

//If you need to export multiple functions or objects, you can use the "exports" shortcut from Node.js.

'use strict';

var logDate = function() {
  console.log(new Date().getDate());
}

var logMonth() {
    console.log(new Date().getMonth());
}

exports.logDate = logDate;
exports.logMonth = logMonth;


//Then, in app.js you can use it like this:

// var dateUtils = require('./dateutils');
// dateUtils.logDate();
// dateUtils.logMonth();

//Or like this:

// var logDate = require('./dateutils').logDate;
// logDate();