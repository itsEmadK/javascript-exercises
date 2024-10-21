const convertToCelsius = function (temp) {
    const tempInCelsius = +((temp - 32) * 5 / 9);
    const roundedTemp = +(tempInCelsius.toFixed(1));
    return roundedTemp;
};

const convertToFahrenheit = function (temp) {
    const tempInFahrenheit = +((temp * 9 / 5) + 32)
    const roundedTemp = +(tempInFahrenheit.toFixed(1));
    return roundedTemp;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};
