// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let newStr = str.slice();
  let arrStr = [];
  for(let i = newStr.length-1; i >= 0; i--) {
    arrStr.push(newStr[i]);
  }
  if(arrStr.join('') === str) {
    return true;
  } else {
    return false;
  }
}

module.exports = palindrome;
