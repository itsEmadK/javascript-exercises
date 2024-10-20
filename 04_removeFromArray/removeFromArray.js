const removeFromArray = function (array, ...valuesToRemove) {
    let newArray = array;
    for (const value of valuesToRemove) {
        newArray = newArray.filter(
            (item) => item !== value
        );
    }
    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
