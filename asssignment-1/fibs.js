

function iterativeFib(n) {
    let arr = [0, 1];
    if(n <= 0) return "Invalid Number";
    if(n === 1) return arr;
    for(let i = 2; i < n; i++) {
        arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }

    return arr;
}

console.log(iterativeFib(8));
console.log(iterativeFib(14));