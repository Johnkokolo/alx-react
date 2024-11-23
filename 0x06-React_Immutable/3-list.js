// Import the List from Immutable.js
import { List } from 'immutable';

// Function to convert an array into an Immutable List
export function getListObject(array) {
  // Convert the array into an immutable List
  return List(array);
}

// Function to add an element to an existing Immutable List
export function addElementToList(list, element) {
  // Append the string element to the immutable List
  return list.push(element);
}
