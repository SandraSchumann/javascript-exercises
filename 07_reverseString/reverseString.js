const reverseString = function(inputString) {
  // Check if the input is a string
  if (typeof inputString !== 'string') {
    return 'ERROR';
  }

  // Split the string into an array of characters, reverse it, and join it back into a string
  const reversedString = inputString.split('').reverse().join('');
  
  return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
