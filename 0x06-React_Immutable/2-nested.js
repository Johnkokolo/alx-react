// Example object
const obj = {
  name: {
    first: "Guillaume",
    last: "Salva"
  }
};

// Valid path
const path = ['name', 'first'];
console.log(accessImmutableObject(obj, path));  // Output: "Guillaume"

// Invalid path (key 'middle' does not exist)
const invalidPath = ['name', 'middle'];
console.log(accessImmutableObject(obj, invalidPath));  // Output: undefined

// Invalid path (wrong input type for array)
console.log(accessImmutableObject(obj, 'name.first'));  // Output: undefined

// Invalid object (null or undefined object)
console.log(accessImmutableObject(null, ['name', 'first']));  // Output: undefined
