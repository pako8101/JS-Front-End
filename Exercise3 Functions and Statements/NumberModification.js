function solve(num) {
    num = num.toString();

    function calcAverage(num) {
    return (num
    .split("")
    .map(Number)
    .reduce((total,current) => total + current,0)/num.length
    );
    }

    let average = calcAverage(num);

    while (average < 5) {
        num +="9";
       average = calcAverage(num);
    }

 return num;
}

   console.log( solve(101));








