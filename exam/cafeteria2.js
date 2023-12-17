// function manageCafeteria(input) {
//     const baristas = {};
    
//     const n = Number(input.shift());

//     for (let i = 0; i < n; i++) {
//         const [name, shift, ...coffeeTypes] = input[i].split(' ');
//         baristas[name] = { shift, coffeeTypes };
//     }
//     while (input.length > 0) {
//         const command = input.shift();
        
//         if (command === 'Closed') {
//           break;
//         }

//     for (let i = n; i < input.length; i++) {
//         const [command, name, ...params] = input[i].split(' / ');

//         switch (command) {
//             case 'Prepare':
//                 const [requestedName, requestedShift, requestedCoffeeType] = params;
//                 if (baristas[requestedName].shift === requestedShift && baristas[requestedName].coffeeTypes.includes(requestedCoffeeType)) {
//                     console.log(`${requestedName} has prepared a ${requestedCoffeeType} for you!`);
//                 } else {
//                     console.log(`${requestedName} is not available to prepare a ${requestedCoffeeType}.`);
//                 }
//                 break;

//             case 'Change Shift':
//                 const newShift = params[0];
//                 baristas[name].shift = newShift;
//                 console.log(`${name} has updated his shift to: ${newShift}`);
//                 break;

//             case 'Learn':
//                 const newCoffeeType = params[0];
//                 if (baristas[name].coffeeTypes.includes(newCoffeeType)) {
//                     console.log(`${name} knows how to make ${newCoffeeType}.`);
//                 } else {
//                     baristas[name].coffeeTypes.push(newCoffeeType);
//                     console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`);
//                 }
//                 break;
//         }
//     }

//     for (const [baristaName, data] of Object.entries(baristas)) {
//         const drinks = data.coffeeTypes.join(', ');
//         console.log(`Barista: ${baristaName}, Shift: ${data.shift}, Drinks: ${drinks}`);
//     }
// }
// }

// // Example usage
// const input = [
//     '3',
//     'Alice day Espresso,Cappuccino',
//     'Bob night Latte,Mocha',
//     'Carol day Americano,Mocha',
//     'Prepare / Alice / day / Espresso',
//     'Change Shift / Bob / night',
//     'Learn / Carol / Latte',
//     'Learn / Bob / Latte',
//     'Prepare / Bob / night / Latte',
//     'Closed'
// ];

// manageCafeteria(input);


function manageCafeteria(input) {
    const baristas = {};
    
    const n = Number(input.shift());

    for (let i = 0; i < n; i++) {
        const [name, shift, ...coffeeTypes] = input[i].split(' ');
        baristas[name] = { shift, coffeeTypes };
    }

    while (input.length > 0) {
        const command = input.shift();

        if (command === 'Closed') {
            break;
        }

        const [action, name, ...params] = command.split(' / ');

        switch (action) {
            case 'Prepare':
                const [requestedName, requestedShift, requestedCoffeeType] = params;
                if (baristas[name]===requestedName && baristas[requestedName].shift === requestedShift && baristas[requestedName].coffeeTypes.includes(requestedCoffeeType)) {
                    console.log(`${requestedName} has prepared a ${requestedCoffeeType} for you!`);
                } else {
                    console.log(`${requestedName} is not available to prepare a ${requestedCoffeeType}.`);
                }
                break;

            case 'Change Shift':
                const newShift = params[0];
                baristas[name].shift = newShift;
                console.log(`${name} has updated his shift to: ${newShift}`);
                break;

            case 'Learn':
                const newCoffeeType = params[0];
                if (baristas[name].coffeeTypes.includes(newCoffeeType)) {
                    console.log(`${name} knows how to make ${newCoffeeType}.`);
                } else {
                    baristas[name].coffeeTypes.push(newCoffeeType);
                    console.log(`${name} has learned a new coffee type: ${newCoffeeType}.`);
                }
                break;
        }
    }

    for (const [baristaName, data] of Object.entries(baristas)) {
      //  const drinks = data.coffeeTypes;
        console.log(`Barista: ${baristaName}, Shift: ${data.shift}, Drinks: ${drinks.join(', ')}`);
    }
}

const input = [
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed'
];

manageCafeteria(input);
