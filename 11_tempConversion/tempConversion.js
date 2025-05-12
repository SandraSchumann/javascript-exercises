const convertToCelsius = function(fahrenheitDegree) {
  let celcuis = (fahrenheitDegree - 32) * 5 / 9;
  return Math.round(celcuis * 10) / 10;
};

const convertToFahrenheit = function(celsiusDegree) {
  let fahrenheit = (celsiusDegree * 9 / 5) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
