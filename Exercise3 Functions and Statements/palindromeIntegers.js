function solve(arr) {
    

    function isPalindrome(num) {
       let numAsString = num.toString();
       let reversedNum = numAsString.split('').reverse().join('');

       return numAsString === reversedNum;
    }
for (const currentNum of arr) {
    console.log(isPalindrome(currentNum));
}


}


solve([123,323,421,121]);









