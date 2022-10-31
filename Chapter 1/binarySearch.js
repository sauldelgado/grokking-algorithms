function binarySearch (array, item) {
    let low = 0;
    let high = array.length - 1;
    let mid = Number.MIN_VALUE;
    let guess = Number.MIN_VALUE;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        guess = array[mid];

        if (guess === item) {
            return mid;
        } else if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
};