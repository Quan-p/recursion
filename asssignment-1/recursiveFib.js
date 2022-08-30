function fibsRec(length) {
    if (length < 0) return "Invalid Number";
    if (length === 0) return [0];
    if (length === 1) return [0, 1];   
    
    let arr = fibsRec(length - 1);
    arr.push(arr[arr.length -1] + arr[arr.length - 2])
    return arr;
}
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(4));
console.log(fibsRec(8));

