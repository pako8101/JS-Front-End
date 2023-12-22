function decodeCryptocurrency(input) {
    let message = input.shift();

    for (let command of input) {
        if (command === 'Buy') {
            break;
        }

        let tokens = command.split('?');
        let action = tokens[0];

        switch (action) {
            case 'TakeEven':
                message = takeEven(message);
                break;
            case 'ChangeAll':
                message = changeAll(message, tokens[1], tokens[2]);
                break;
            case 'Reverse':
                message = reverseSubstring(message, tokens[1]);
                break;
        }
    }

    console.log(`The cryptocurrency is: ${message}`);

    function takeEven(str) {
        let result = '';
        for (let i = 0; i < str.length; i += 2) {
            result += str[i];
        }
        console.log(result);
        return result;
    }

    function changeAll(str, substring, replacement) {
        while (str.includes(substring)) {
            str = str.replace(substring, replacement);
        }
        console.log(str);
        return str;
    }

    function reverseSubstring(str, substring) {
        if (str.includes(substring)) {
            let reversed = substring.split('').reverse().join('');
            str = str.replace(substring, '') + reversed;
            console.log(str);
        } else {
            console.log('error');
        }
        return str;
    }
}
decodeCryptocurrency(["z2tdsfndoctsB6z7tjc8ojzdngzhtjsyVjek!snfzsafhscs", 
"TakeEven",
"Reverse?!nzahc",
"ChangeAll?m?g",
"Reverse?adshk",
"ChangeAll?z?i",
"Buy"])
