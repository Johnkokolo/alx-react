// Import Immutable.js library to use fromJS
const { fromJS } = require('immutable');

// Function to convert a JavaScript object to an Immutable Map
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

// Convert to Immutable Map
const immutableMap = getImmutableObject(exampleObject);

// Log the Immutable Map to the console
console.log(immutableMap);

// Example output (you can check it in your console):
// Map { "fear": true, "smell": -1033575916.9145899, "wall": false, "thing": -914767132 }
