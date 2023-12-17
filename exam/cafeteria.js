function manageBaristas(input) {
    const n = Number(input.shift());
    const baristas = {};

    for (let i = 0; i < n; i++) {
        const [name, shift, coffeeTypes] = input[i].split(' ');
        baristas[name] = { shift, coffeeTypes: coffeeTypes.split(',') };
    }
    // while (input.length > 0) {
    //     const command = input.shift();
        
    //     if (command === 'Closed') {
    //       break;
    //     }
    

    for (const line of input.slice(n)) {
        const [action, baristaName, type] = line.split(' / ');

        switch (action) {
            case 'Prepare':
                const coffeeType = type;
                if (baristas[baristaName] && baristas[baristaName].shift === type && baristas[baristaName].coffeeTypes.includes(coffeeType)) {
                    console.log(`${baristaName} has prepared a ${coffeeType} for you!`);
                    
                } else {
                    console.log(`${baristaName} is not available to prepare a ${coffeeType}.`);
                }
                break;

            case 'Change Shift':
                const newShift = type;
                if (baristas[baristaName]) {
                    baristas[baristaName].shift = newShift;
                    console.log(`${baristaName} has updated his shift to: ${newShift}`);
                }
                break;

            case 'Learn':
                const newCoffeeType = type;
                if (baristas[baristaName]) {
                    if (baristas[baristaName].coffeeTypes.includes(newCoffeeType)) {
                        console.log(`${baristaName} knows how to make ${newCoffeeType}.`);
                    } else {
                        baristas[baristaName].coffeeTypes.push(newCoffeeType);
                        console.log(`${baristaName} has learned a new coffee type: ${newCoffeeType}.`);
                    }
                }
                break;
        }
    }

    for (const baristaName in baristas) {
        const { shift, coffeeTypes } = baristas[baristaName];
        console.log(`Barista: ${baristaName}, Shift: ${shift}, Drinks: ${coffeeTypes.join(', ')}`);
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
      'Closed'];
    

manageBaristas(input);
