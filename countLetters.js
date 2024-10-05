const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟩 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔺 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Test
assertEqual('Lighthouse Labs', 'Bootcamp');
assertEqual(1, 1);
assertEqual("Connor", "Connor");

const countLetters = function(string) {
  const letterCount = {};
  
  for (letter of string.toUpperCase()) {
    if (letterCount[letter]) {
      letterCount[letter]++;
    } else {
      letterCount[letter] = 1;
    }
  }
  return letterCount;
}

console.log(countLetters("Connor"));