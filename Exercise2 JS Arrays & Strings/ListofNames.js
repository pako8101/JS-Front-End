function solve(arr) {
   arr.sort();

    arr.forEach((name,index) => {
        console.log(`${index+1}.${name}`);
        
    });

}



solve(["John", "Bob", "Christina", "Ema"])








