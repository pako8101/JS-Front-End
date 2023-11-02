const carWash = {
soap : (cleanPercantege) => cleanPercantege + 10,
water : (cleanPercantege) => {
   const increase =  cleanPercantege * 0.2;
   return cleanPercantege + increase;
},
"vacuum cleaner": (cleanPercantege) => cleanPercantege + cleanPercantege * 0.25,
mud : (cleanPercantege) => cleanPercantege - cleanPercantege * 0.1
}
function solve(commands) {
    let cleanPercantege = commands.reduce(
        (total,current)=> carWash[current](total)
       
    ,0);


/*function solve(commands) {
    let cleanPercantege = 0;
for (let index = 0; index < commands.length; index++) {
    const command = commands[index];
    cleanPercantege = carWash[command](cleanPercantege);*/


/*function solve(commands) {
    let cleanPercantege = 0;
for (let index = 0; index < commands.length; index++) {
    const command = commands[index];
    if (command==='soap') {
        cleanPercantege +=10;
    }else if (command==='water') {
        cleanPercantege += cleanPercantege * 0.2;
    }else if (command==='vacuum cleaner') {
        cleanPercantege += cleanPercantege * 0.25;
    }else if (command==='mud') {
        cleanPercantege -= cleanPercantege * 0.1;
    }
}*/


    return `The car is ${cleanPercantege.toFixed(2)}% clean.`;
}

console.log(solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));







