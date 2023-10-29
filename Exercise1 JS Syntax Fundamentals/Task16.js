
function sortList(array) {

    const sortedArr = array.sort((a,b)=> a-b);
const resultArr = [];
const length = array.lenght;
for (let index = 0; index < length; index++) {
    const element = array[index];
    if(element %2 === 0){
resultArr.push(sortedArr.shift());
    }else{
        resultArr.push(sortedArr.pop());
    }
}

console.log(sortedArr);

}
sortList([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);















