export default function accessImmutableObject(object, array) {
  // Iterate through the array and use each element to access the corresponding key in the object
  return array.reduce((acc, key) => {
    // If the current accumulator is undefined, return undefined immediately
    if (acc === undefined || acc === null) {
      return undefined;
    }
    // Otherwise, continue drilling down into the object
    return acc[key];
  }, object);
}
