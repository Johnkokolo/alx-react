export default function accessImmutableObject(object, array) {
  // Ensure the object is valid (not null or undefined)
  if (object == null || !Array.isArray(array)) {
    return undefined;
  }

  // Use reduce to traverse the path
  return array.reduce((acc, key) => {
    // Ensure that acc is an object before accessing the key
    if (acc == null || typeof acc !== 'object' || !acc.hasOwnProperty(key)) {
      return undefined;  // Return undefined if the key doesn't exist or if acc is not an object
    }
    return acc[key];
  }, object);
}
