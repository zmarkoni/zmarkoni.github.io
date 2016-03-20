var $ = require('jquery');
var ScrollWatch = require('scrollwatch');

var Model = function() {
  console.log('Models ScrollWatch');

  function addClass(data) {
    console.log(data.el.innerText);
    // console.log($(data.el));
    $(data.el).addClass('active'); //THIS CAN BE ADDED BY DEFAULT
  };

  function addElements(instance, data) {
    $('.section_4 .h2').append('<p>I am lazy and late to the party.</p>');
    // If we want newly injected elements to be watched, refresh ScrollWatch. It will re-query the dom and start watching new elements.
    instance.refresh();
  };

  var swInstance1 = new ScrollWatch({
    watchOnce: false, //always watch element
    onElementInView: addClass
  });

  var swInstance2 = new ScrollWatch({
    watch: 'h2',
    infiniteScroll: true,
    infiniteOffset: 200,
    onInfiniteYInView: function(data) {
        //addElements(swInstance2, data);
      }
      //Injects new elements into the page when you get 200px from the bottom of the page.
  });
}

module.exports = Model;
