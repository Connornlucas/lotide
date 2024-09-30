const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function eqaulArrays() {
  if (eqArrays[0] === eqArrays[1]) {
    console.log(`True: ${eqArrays[0]} is equal to ${eqArrays[1]}`);
  }
  else console.log(`False ${eqArrays[0]} is not equal to ${eqArrays[1]}`);
}

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false