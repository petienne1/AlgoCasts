// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // copy string to new variable
  // create empty array
  // implement a reverse loop
  // push each character into empty array
  // convert array to string
  // return new string

  let newString = str.slice();
  let emptyArr = [];
  let x = str.length-1;

  for(let i = x; i >= 0; i--) {
    emptyArr.push(newString[i]);
  };
  return emptyArr.join('');
}

module.exports = reverse;
