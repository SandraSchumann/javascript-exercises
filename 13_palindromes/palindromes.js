const palindromes = function (text) {
  // Remove all non-alphanumeric characters and convert to lowercase
  const cleanedText = text.replace(/[^a-z0-9]/gi, '').toLowerCase();
  
  // Check if the cleaned text is a palindrome
  const reversedText = cleanedText.split('').reverse().join('');
  
  return cleanedText === reversedText;

};

// Do not edit below this line
module.exports = palindromes;
