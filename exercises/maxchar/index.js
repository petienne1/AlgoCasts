// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  let max = 0;
  let maxCharacter = ''
  for (let i = 0; i < str.length; i++) {
    if(obj[str[i]] === undefined) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  for(let prop in obj) {
    if(obj[prop] > max) {
      max = obj[prop];
      maxCharacter = prop;
    }
  }
  return maxCharacter;
}

module.exports = maxChar;
