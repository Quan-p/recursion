function mergeSort(arr) {
    if(arr.length < 2) return arr;
    let midPoint = Math.floor(arr.length / 2);
    let leftHalf = mergeSort(arr.slice(0, midPoint));
    let rightHalf = mergeSort(arr.slice(midPoint));
    return merge(leftHalf, rightHalf);
}

function merge(leftArr, rightArr) {
    
}