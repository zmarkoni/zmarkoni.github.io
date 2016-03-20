var $ = require('jquery');
var ScrollWatch = require('scrollwatch');

module.exports = customExport;
//inicialize
var customExport = function() { //ne mogu da stavim ime funkcije!

  var swInstance1 = new ScrollWatch({
    watchOnce: false, //always watch element
    onElementInView: addClass
  });

  var swInstance2 = new ScrollWatch({
    watch: 'h2',
    infiniteScroll: true,
    infiniteOffset: 200,
    onInfiniteYInView: addElements
      //Injects new elements into the page when you get 200px from the bottom of the page.
  });

};

//napravio preko prototypa
var addClass = function(data) {
  console.log(data.el.innerText);
  $(data.el).addClass('active'); //THIS CAN BE ADDED BY DEFAULT
};

var addElements = function(data) {
  $('.section_4 .h2').append('<p>I am lazy and late to the party.</p>');
  // If we want newly injected elements to be watched, refresh ScrollWatch. It will re-query the dom and start watching new elements.
  customExport.swInstance2.refresh();
};
