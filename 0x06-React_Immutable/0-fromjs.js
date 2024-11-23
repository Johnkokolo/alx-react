// Import the Immutable.js library
const { fromJS } = require('immutable');

// Function to convert a regular object to an Immutable Map
function getImmutableObject(object) {
  return fromJS(object);
}

// Example usage
const exampleObject = {
  fear: true,
  smell: -1033575916.9145899,
  wall: false,
  thing: -914767132
};

// Calling the function
const immutableMap = getImmutableObject(exampleObject);
console.log(immutableMap);
