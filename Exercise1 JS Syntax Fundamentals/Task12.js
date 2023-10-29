
function coockNumber(number, ...comands) {
    let sum  = Number(number);

    for (let index = 0; index < comands.length; index++) {
        const command = comands[index];
        console.log(command);
        switch (command) {
            case 'chop':
                sum = sum/ 2;
              break
              case 'dice':
                sum = Math.sqrt(sum);
                break
                case 'spice':
                    sum +=1;
                    case 'bake':
                        sum *=3;
                        break
                        case 'fillet':
                            sum -= sum * 0.2;
                            break 
        }
        console.log(sum);
    }
}

coockNumber('9', 'dice', 'spice', 'chop', 'bake', 'fillet');

























