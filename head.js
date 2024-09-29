const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Return the first element and not as an array
const head = function(array){
  return array[0];
};




// Tests
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1,5]),);