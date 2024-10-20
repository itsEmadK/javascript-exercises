const repeatString = function (string, count) {

    let newString = "";
    for (let i = 0; i < count; i++) {
        newString += string;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
