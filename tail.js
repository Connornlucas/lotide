const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// We want to create a function tail, that returns the tail (every element excluding the first) as a new array

const tail = function(array) {
  return array.slice(1);
};

// // Tests
// assertEqual(tail([5, 6]), 6);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(tail([1,5]),);
// 
// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
// 
// 
// let other = tail([5, 6]); 
// assertEqual(other[0], 6);
// assertEqual(other, 6);