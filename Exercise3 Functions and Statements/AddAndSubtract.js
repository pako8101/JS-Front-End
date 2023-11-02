function solve(x,y,z) {
    function sum() {
        return x + y;
    }
    function subtract(x,y) {
        return x-y;
    }
    return subtract(sum(x,y),z);
     
}
console.log(solve(23,6,10));








