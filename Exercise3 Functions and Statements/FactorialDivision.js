function solve(x,y) {
function calculateFactoriel(num) {
    let sum = 1;
    for (let index = 1; index <= num; index++) {
        sum*=index;
        
    }
    return sum;
}

    let sumX=calculateFactoriel(x);
    let sumY = calculateFactoriel(y);
/*for (let index = 0; index <= x; index++) {
    sumX *=index;
    
}
for (let index = 0; index <= y; index++) {
    sumY *=index;
    
}*/
return (sumX / sumY).toFixed(2);
}

   console.log(solve(5,2)); 










