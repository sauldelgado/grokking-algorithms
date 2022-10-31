function recursiveBinarySearch(array, item, low = 0, high = array.length - 1) {
	let guess = Math.floor(((high - low) / 2) + low);

    if (high <= low && array[guess] !== item) return -1;
    else if (array[guess] === item) return guess;
    else if (array[guess] < item) return recursiveBinarySearch(array, item, guess + 1, high);
    else if (array[guess] > item) return recursiveBinarySearch(array, item, low, guess - 1);
};