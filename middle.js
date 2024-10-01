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

// Middle
// Use assertArraysEqual to test
// Middle function should RETURN an array with only the middle elements 
// Arrays with 1 or 2 elements should return and empty array
// Arrays with an odd number of elements should return 1 element
// Arrays with an even number of elements should return 2 elements
//    ** Test all these possibilites **

// Lets use .length to find out the length of the array. We'll add the conditon to just return an empty array if the number is 1 or 2
// Watch out for zero index complications

const middle = function(array) {
  let midArray = [];
  if (array.length > 2){
    let i = 0;
    
  }
  return midArray;
}

