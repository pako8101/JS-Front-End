function solve(input) {
    const parking = new Set();
    input.forEach(entry => {
        const [command,number]= entry.split(', ');
        if (command=== 'IN') {
            parking.add(number);
        }else if (command==='OUT'){
         parking.delete(number);
        }
    });
   /* const parking = [];
input.forEach(entry => {
    const [command,number]= entry.split(', ');
    if (command=== 'IN') {
        parking.push(number);
    }else{
     const index =  parking.indexOf(number);
     parking.splice(index,1);
    }
});
parking.sort();
console.log(parking.join('\n'));
*/
const numbers = Array.from(parking).sort();
console.log(numbers.join('\n'));
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
);










