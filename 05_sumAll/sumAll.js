const sumAll = function (start, end) {

    if (+start < -1 || end < -1){
        return "ERROR";
    }

    let sum = 0;
    for (
        let i = (start < end ? start : end);
        i <= (start < end ? end : start);
        i++
    ) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
