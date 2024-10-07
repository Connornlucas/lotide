const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
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
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  const keys = Object.keys(object1);
  for (const key of keys) {
    if (!(key in object2)) {
      return false;
    }
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false;
      }
    }
    else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};
// True Test
const pantObject = { type: "jean", size: 32};
const anotherPantObject = { size: 32, type: "jean"};
assertEqual(eqObjects(pantObject, anotherPantObject), true);
// Different key number test
const longPantObject = { type: "joggers", size: 32, pantLength: 32};
assertEqual(eqObjects(pantObject, longPantObject), false);
// Different key name test
const nicePants = { type: "dress", size: 32};
assertEqual(eqObjects(nicePants, pantObject), false);
// Test against and Array
const sillyPants = { type: "jeans", color: ["blue", "black"]};
const funnyPants = { color: ["blue", "black"], type: "jeans"};
const crazyPants = { type: "jeans", size: 32, color: ["blue", "black"]};
assertEqual(eqObjects(sillyPants, funnyPants), true);
assertEqual(eqObjects(crazyPants, sillyPants), false);