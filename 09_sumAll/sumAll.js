const sumAll = function(start, end) {

// Check if start and end are numbers
if (typeof start !== 'number' || typeof end !== 'number') {
  return 'ERROR';
}
// Check if start and end are integers
if (!Number.isInteger(start) || !Number.isInteger(end)) {
  return 'ERROR';
}
// Check if start and end are positive
if (start < 0 || end < 0) {
  return 'ERROR';
}

let total = 0;
let biggerNumber = Math.max(start, end);
let smallerNumber = Math.min(start, end);

for (let i = smallerNumber; i <= biggerNumber; i++) {
  total += i;
}
return total;
};

// Do not edit below this line
module.exports = sumAll;
