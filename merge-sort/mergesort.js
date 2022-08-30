function mergeSort(arr) {
    if(arr.length < 2) return arr;
    let midPoint = Math.floor(arr.length / 2);
    let leftHalf = mergeSort(arr.slice(0, midPoint));
    let rightHalf = mergeSort(arr.slice(midPoint));
    return merge(leftHalf, rightHalf);
}

function merge(leftArr, rightArr) {
    let sortedArr = [];
    let arrWithMin;
    while(leftArr.length > 0 && rightArr.length > 0) {
        if(leftArr[0] < rightArr[0]) {
                arrWithMin = leftArr;
        } else arrWithMin = rightArr;
        let smallerVal = arrWithMin.shift();
        sortedArr.push(smallerVal);
    }
    return sortedArr.concat(leftArr, rightArr);
}

console.log(mergeSort([8, 7, 6, 5, 4, 3, 2, 1]));