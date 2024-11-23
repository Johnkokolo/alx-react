// Import Map from Immutable.js
import { Map } from 'immutable';

// Create the first map with the given object
export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Create the second map by modifying the values for the specified indices
export const map2 = map
  .set(2, 'Benjamin')  // Modify value at index 2
  .set(4, 'Oliver');   // Modify value at index 4 (the same value, but we still use set)

