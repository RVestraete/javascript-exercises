const convertToCelsius = function(tempFahr) {
  return Math.round((tempFahr - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(tempCelcius) {
  return Math.round((tempCelcius * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
