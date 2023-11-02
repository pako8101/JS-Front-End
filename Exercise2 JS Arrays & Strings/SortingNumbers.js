function solve(arr) {
    arr.sort((a,b) => a-b);
    const length = arr.length;
    const result = [];
    for (let index = 0; index < length/2; index++) {
       result.push(arr[index]);
       result.push(arr[length - index - 1])
    }
    if (length/2 !== 0) {
        result.push(arr[Math.floor(length/2)]);
    }
    console.log(result);
}



solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);






