// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // create an array with 0,1 inside of it
  // create a for loop where i equals 2 and break the loop when i equals n
    // push sum of two previous numbers into array
  // return array[n]

  let fibonacci = [0,1];

  for(let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
  }
  return fibonacci[n];
}

module.exports = fib;
