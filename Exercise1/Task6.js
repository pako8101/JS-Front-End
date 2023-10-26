function solve(number){
    const digits = number.toString();
    let sum = 0;
    for (let index = 0; index < digits.length; index++) {
        let element = digits[index];
        sum += Number(element);
       
    }
     console.log(sum);
}
  solve(123456);














