function quicksort(array) {
    if (array.length < 2) {
        return array;
    } else if (array.length === 2) {
        if (array[0] > array[1]) array.reverse();
        return array;
    } else {
        let pivot = Math.floor(((0 + array.length) / 2));
        let lesser = [];
        let greater = [];
        for (let i = 0; i < array.length; i++) {
            if (i !== pivot) {
                if (array[i] < array[pivot]) lesser.push(array[i]);
                if (array[i] > array[pivot]) greater.push(array[i]);
            }
        }
        return [].concat(quicksort(lesser)).concat(array[pivot]).concat(quicksort(greater));
    }
};