function solve(number) {
  let numberAsString = number.toString();
  let oddSum = 0;
  let evenSum = 0;

  for (let index = 0; index < numberAsString.length; index++) {
    const digit = Number(numberAsString[index]);

    digit % 2 === 0 ? (evenSum += digit) : (oddSum += digit);
   
  }
   console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
solve(1000435)