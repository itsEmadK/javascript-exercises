const convertToCelsius = function(temp) {
  const tempInCelsius = +((temp - 32) * 5 / 9);
  const roundedTemp = +(tempInCelsius.toFixed(1));
  return roundedTemp;
};

const convertToFahrenheit = function() {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
