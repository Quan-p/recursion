let arr = [0, 1];

function iterativeFib(n) {
    if(n <= 0) return "Invalid Number";
    if(n === 1) return arr;
    for(let i = 2; i < n; i++) {
        let sum = arr[i -1] + arr[i - 2];
        arr.push(sum);
    }

    return arr;
}

console.log(iterativeFib(8));