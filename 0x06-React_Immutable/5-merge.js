// Import List and Map from Immutable.js
import { List, Map } from 'immutable';

// Function to concatenate two arrays into an Immutable List
export function concatElements(page1, page2) {
  // Ensure both inputs are arrays
  if (!Array.isArray(page1) || !Array.isArray(page2)) {
    throw new Error('Both page1 and page2 should be arrays');
  }

  // Convert arrays to Immutable Lists and concatenate them
  return List(page1).concat(List(page2));
}

// Function to merge two objects into an Immutable List
// If two values are the same, page2 values should be used.
export function mergeElements(page1, page2) {
  // Ensure both inputs are plain objects, and neither is null or an array
  if (!(page1 && typeof page1 === 'object' && !Array.isArray(page1)) || 
      !(page2 && typeof page2 === 'object' && !Array.isArray(page2))) {
    throw new Error('Both page1 and page2 should be non-null plain objects');
  }

  // Convert objects to Immutable Maps (will handle case where it's already a Map)
  const map1 = Map(page1);
  const map2 = Map(page2);

  // Merge the two maps, with values from map2 overriding map1 if keys are the same
  const mergedMap = map1.mergeWith((value1, value2) => value2, map2);

  // Return the values of the merged map as an Immutable List
  return mergedMap.toList();
}
