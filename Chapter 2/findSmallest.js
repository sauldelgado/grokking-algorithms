function findSmallest(array) {
    let smallest = array[0];
    let smallestIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (smallest > array[i]) {
            smallest = array[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
};