// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  if(stringA.length !== stringB.length) {
    return false;
  }

  let objA = {

  };

  let objB = {

  };

  for (let i = 0; i < stringA.length; i++) {
    if(objA[stringA[i]] === undefined) {
      objA[stringA[i]] = 1;
    } else {
      objA[stringA[i]]++;
    }
  }
  for (let i = 0; i < stringB.length; i++) {
    if(objB[stringB[i]] === undefined) {
      objB[stringB[i]] = 1;
    } else {
      objB[stringB[i]]++;
    }
  }
  return objA === objB;
}

module.exports = anagrams;
