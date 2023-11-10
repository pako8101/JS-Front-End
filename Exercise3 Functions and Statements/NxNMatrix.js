function solve(number) {
    
    function printRow(num) {
        let singleRow = (num.toString() + ' ').repeat(num);
         return singleRow;
    }
for (let index = 1; index <= number; index++) {
    console.log(printRow(number));
    
}


}


solve(3);











