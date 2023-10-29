
function rotateArray(array,rotationCount) {
    for (let index = 0; index < rotationCount; index++) {
        const firstElement = array.shift();
       array.push(firstElement);

    } 
    console.log(array.join(" "));
}

rotateArray([51,47, 32, 61, 21], 2);
















