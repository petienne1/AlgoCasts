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
  function cleanStr(str) {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
  }
  return cleanStr(stringA) === cleanStr(stringB);
}
module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   const firstString = stringA.replace(/[^\w]/g, '');
//   const secondString = stringB.replace(/[^\w]/g, '');
//
//   if(firstString.length !== secondString.length) {
//     return false;
//   }
//
//   let lookup = {};
//
//   for (let i = 0; i < firstString.length; i++) {
//     if(lookup[firstString[i]] === undefined) {
//       lookup[firstString[i]] = 1;
//     } else {
//       lookup[firstString[i]]++;
//     }
//   }
//   for (let i = 0; i < secondString.length; i++) {
//     lookup[secondString[i]] ? secondString[i]-- : false;
//   }
//   return true;
// }
// module.exports = anagrams;
