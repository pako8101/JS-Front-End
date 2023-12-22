function decodeCryptocurrency(input) {
    let encodedMessage = input.shift();

    while (true) {
        let command = input.shift();

        if (command === 'Buy') {
            break;
        }

        let [action, ...params] = command.split('?');

        switch (action) {
            case 'TakeEven':
                encodedMessage = takeEven(encodedMessage);
                break;

            case 'ChangeAll':
                let [substring, replacement] = params;
                encodedMessage = changeAll(encodedMessage, substring, replacement);
                break;

            case 'Reverse':
                let substringToReverse = params[0];
                encodedMessage = reverseSubstring(encodedMessage, substringToReverse);
                break;

            // default:
            //     break;
        }
    }

    console.log(`The cryptocurrency is: ${encodedMessage}`);

    function takeEven(message) {
        odd = [],
        even = [];
    
    for (let i = 0; i < message.length; i++) {
      i % 2 === 0
        ? even.push(message[i]) 
        : odd.push(message[i])
    }
   return even.join('');
      //  return message.split('').filter((_, index) => index % 2 === 0).join('');
    }

    function changeAll(message, substring, replacement) {
        while (message.includes(substring)) {
            message = message.replace(substring, replacement);
        }
        return message;
    }

    function reverseSubstring(message, substring) {
        if (message.includes(substring)) {
            let reversed = substring.split('').reverse().join('');
            message = message.replace(substring, '') + reversed;
            
        } else {
            console.log('error');
        }
        return message;
    }
}




decodeCryptocurrency(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])
;
