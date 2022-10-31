function arraySum (array) {
    let sum = 0;
    
    if (array.length === 1) {
        sum += Number(array[0]);
    } else {
        sum += Number(array[array.length - 1]) + arraySum(array.splice(0, array.length - 1));
    }

    return sum;
};