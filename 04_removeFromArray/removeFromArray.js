const removeFromArray = function (array, valueToRemove) {
    return array.toSpliced(
        array.indexOf(valueToRemove),
        1
    );
};

// Do not edit below this line
module.exports = removeFromArray;
