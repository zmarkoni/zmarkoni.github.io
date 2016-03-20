var $ = require('jquery');

//REVEALING MODULE PATTERN
var Model = function() {
    var name = "Zoran Markovic";
    var greetings = "Hi";

    function printName(){
        console.log(greetings + " " + name + " !");
    }

    function setName(value){
      name = value;
    }

    function getName(){
      printName();
    }

    function updatePlaceholder(someText) {
      $('#placeholder').text(someText);
    }

    // reveal public pointers to private functions and properties
    return {
      setName : setName, //zovem kao metod
      getName : getName, //zovem kao metod
      greetings : greetings,
      updatePlaceholder : updatePlaceholder
    };

}
module.exports = Model;
