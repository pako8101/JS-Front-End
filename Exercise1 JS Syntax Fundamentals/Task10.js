"use strict";

function checkAldigitsAreSame(number) {
    number
    .toString
    .split("")
    .map(Number);
const digits = Array.from(number.toString(),Number);
const isConesistent = new Set(digits).size===1;
//const sum = digits.reduce(total,number) => total + number,0);
const sum = digits.reduce(function(accumulator,current){
return accumulator + current;
},0);
console.log(isConesistent);

console.log(sum);


   /*const digitsString = number.toString();
   let isConesistent = true;
   let sum = Number(digitsString[0]);

   for (let index = 1; index < digitsString.length; index++) {
    sum += Number(digitsString[index]);
    const element = digitsString[index];

    if (element !== digitsString[index-1]) {
        isConesistent=false;
    }
   }
   console.log(isConesistent);
   console.log(sum);*/
}
checkAldigitsAreSame(222222);















