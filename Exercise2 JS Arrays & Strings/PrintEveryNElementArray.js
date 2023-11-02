function solve(arr,num) {
    const newArr = [];
    for (let index = 0; index < arr.length; index+=num) {
      newArr.push(arr[index]);
       
       
    }console.log(newArr.join("\n")); 
}


solve(['dsa',
'asd', 
'test', 
'tset'], 
2
);










