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

// True Test
assertArraysEqual(([1,2,3]), [1,2,3]);


const letterPositions = function(sentence) {
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }
    if (results[letter]) {
      results[letter].push(i);
    } else {
      results[letter] = [i];
    }
  }
  return results;
};


// Test with 'hello'
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);