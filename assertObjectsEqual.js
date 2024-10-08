const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  const keys = Object.keys(object1);
  for (const key of keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect;
  if (eqObjects(object1, object2)) {
    console.log(`🟢 Assertion Passed: ${inspect(object1)} and ${inspect(object2)} are equal.`);
  } else {
    console.log(`🔻 Assertion Failed: ${inspect(object1)} and ${inspect(object2)} are not equal.`);
  }
};

assertObjectsEqual({a: '1', b: 2}, {b: 2, a: '1'});