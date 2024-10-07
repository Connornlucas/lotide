const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
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
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

const pantObject = { type: "jean", size: 32};
const anotherPantObject = { size: 32, type: "jean"};
assertEqual(eqObjects(pantObject, anotherPantObject), true);

const longPantObject = { type: "joggers", size: 32, pantLength: 32};
assertEqual(eqObjects(pantObject, longPantObject), false);

const nicePants = { type: "dress", size: 32};
assertEqual(eqObjects(nicePants, pantObject), false);
