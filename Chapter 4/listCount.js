function listCount(list) {
    let count = 0;
    let length = list.length;

    if (length === 1) {
        count += 1;
    } else {
        count += 1 + listCount(list.splice(0, length - 1));
    }

    return count;
};