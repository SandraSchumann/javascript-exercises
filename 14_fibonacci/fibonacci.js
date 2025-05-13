const fibonacci = function(fibonacciIndex) {
  if (fibonacciIndex < 0) return 'OOPS';
  if (fibonacciIndex === 0) return 0;
  if (fibonacciIndex === 1) return 1;

  let fib = [0, 1];
  for (let i = 2; i <= fibonacciIndex; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  
  return fib[fibonacciIndex];

};

// Do not edit below this line
module.exports = fibonacci;
