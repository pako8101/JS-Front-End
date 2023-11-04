function substring(word,text) {
    let wordsArr = text.toLowerCase().split(' ');
    let output = `${word} not found!`;
for (let index = 0; index < wordsArr.length; index++) {
    if (wordsArr[index] === word) {
        output = word;
    }
    
}
console.log(output);

}
substring('python',
'JavaScript is the best programming language'

);













