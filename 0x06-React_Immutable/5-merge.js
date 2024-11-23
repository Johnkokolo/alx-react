// Import List and Map from Immutable.js
import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
  // Convert arrays to Immutable Lists and concatenate them
  return List(page1).concat(List(page2));
}

// Function to merge two objects into an Immutable List
// If two values are the same, page2 values should be used.
export function mergeElements(page1, page2) {
  // Convert objects to Immutable Maps
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Merge the two maps, with values from map2 overriding map1 if keys are the same
  const mergedMap = map1.mergeWith((value1, value2) => value2, map2);

  // Return the values of the merged map as an Immutable List
  return mergedMap.toList();
}
