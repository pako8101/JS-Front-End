function printLoadingBar(parcentage) {

    const parcentageNumber = parcentage / 10; 
const bar = "%".repeat(parcentageNumber)
 + ".".repeat(10-parcentageNumber);
return parcentage===100 ? console.log("100% Complete!\n"+`[${bar}]`) 
:   console.log(`${parcentage}% [${bar}]\n`+"Still loading...");

   /* let bar = "";
    for (let index = 1; index <= 100; index+=10) {
       
        if (index < parcentage) {
            bar += "%";
        }else{
            bar+=".";
        }
    }
        if (parcentage===100) {
            console.log("100% Complete!");
            console.log(`[${bar}]`);
        }else{
            console.log(`${parcentage}% [${bar}]`);
            console.log("Still loading...");
        }*/
    }
   


printLoadingBar(30);














