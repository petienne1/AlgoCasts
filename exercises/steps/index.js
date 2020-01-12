// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // from 0 to n, iterate thru rows
  for (let row = 0; row < n; row++) {
    // create an empty string called 'stair'
    let stair = '';
    // from 0 to n, iterate thru columns
    for (let column = 0; column < n; column++) {
      // if column is less than or equal to row,
      if(column <= row) {
        // add '#' to stair
        stair += '#';
      } else {
        // else add ' ' to stair
        stair += ' ';
      }
    }
    console.log(stair);
  }
  // console log stair
}

module.exports = steps;
