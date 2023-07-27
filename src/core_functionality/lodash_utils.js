```javascript
const _ = require('lodash');

// Function to check if an object is empty
function isEmpty(obj) {
  return _.isEmpty(obj);
}

// Function to clone an object deeply
function cloneDeep(obj) {
  return _.cloneDeep(obj);
}

// Function to merge two objects
function mergeObjects(obj1, obj2) {
  return _.merge({}, obj1, obj2);
}

// Function to get unique values from an array
function getUniqueValues(array) {
  return _.uniq(array);
}

// Function to sort an array in ascending order
function sortAscending(array) {
  return _.sortBy(array);
}

// Function to sort an array in descending order
function sortDescending(array) {
  return _.sortBy(array).reverse();
}

module.exports = {
  isEmpty,
  cloneDeep,
  mergeObjects,
  getUniqueValues,
  sortAscending,
  sortDescending,
};
```