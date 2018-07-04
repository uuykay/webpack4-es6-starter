import { addTwoNumbers } from "./modules/addTwoNumbers";

var app = (function() {
  var functions = {};

  // Variables to keep track of
  var someVariable = 1;
  var someVariable2 = 4;

  // A way to retrieve them
  functions.retrieve = {};
  functions.retrieve.someVariable = () => someVariable;
  functions.retrieve.someVariable2 = () => someVariable2;

  //A way to update them
  functions.update = {};
  functions.update.someVariable = update => {
    someVariable = update;
  };
  functions.update.someVariable2 = update => {
    someVariable2 = update;
  };

  functions.addTheTwoVariables = function() {
    addTwoNumbers(someVariable, someVariable2);
  };

  return functions;
})();

app.addTheTwoVariables();
