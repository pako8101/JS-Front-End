function solve(arr,rotations) {
    let newArr = [];
    for (let index = 0; index < rotations; index++) {
        const firstElement = arr.shift();
        arr.push(firstElement);
 
    }console.log(arr.join(' '));
    
   
}


solve([51, 47, 32, 61, 21], 2);









