// For simplicity, uses the findSmallest function
// we created in this chapter

function selectionSort(array) {
    let length = array.length;
    let newArray = [];

    for (let i = 0; i < length; i++) {
        let smallest = findSmallest(array);
        newArray.push(array[smallest]);
        array.splice(smallest, 1);
    }

    return newArray;
}