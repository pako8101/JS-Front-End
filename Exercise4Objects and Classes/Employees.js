function solve(input) {

    input.forEach(emloyee => {
        console.log(`Name: ${emloyee} -- Personal Number: ${emloyee.length}`);
    });
    /*
 const employees =  input.reduce((acc,curr) => {
acc[curr] = curr.length;
return acc;
    }, {})
   Object.entries(employees).forEach(([name,number]) =>{

    console.log(`Name: ${name} -- Personal number: ${number}`);
   });*/
}



solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    );







