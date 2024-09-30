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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`🟢 Assertion Passed: ${array1} and ${array2} are equal.`);
  } else {
    console.log(`🔻 Assertion Failed: ${array1} and ${array2} are not equal.`);
  }
};

// Creating a new function called without
// This function will take a "source array" and "itemsToRemove array"
// It will then return an array (without modifying the original) with only elements from the *source* that are not present in the itemsToRemove array

const without = function(array1, array2) {
  let withoutArray = [];
  for (const element of array1) {
    if (!array2.includes(element)) {
      withoutArray.push(element);
    }
  }
  return withoutArray;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => should PASS
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => should PASS