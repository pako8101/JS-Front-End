function solve(words,text) {

let wordsArr = words.split(", ");
let textArr = text.split(" ");
for (let i = 0; i < wordsArr.length; i++) {
    
for (let index = 0; index < textArr.length; index++) {
    if (textArr[index].includes("*") 
    && wordsArr[i].length === textArr[index].length) {
    textArr[index] = wordsArr[i];
}
    }
}

  console.log(textArr.join(" "));
     

     


}



solve('great',
'softuni is ***** place for learning new programming languages'
);









