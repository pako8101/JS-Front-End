function wordsTracker(input) {
    const [searchWords, ...words] = input;
    const wordsOccur = searchWords.split(' ')
    .reduce((acc,curr) => {
acc[curr] = 0;
return acc;
},{})
    let sorted = words.sort((a,b)=> a>b);
sorted.forEach(word => {
    if (wordsOccur.hasOwnProperty(word)) {
        wordsOccur[word] += 1;
    }
    
});
//const sortedArr = wordsOccur.sort((a,b)=> a-b);
Object.keys(wordsOccur).forEach((key)=>{
    console.log(`${key} - ${wordsOccur[key]}`);

})
}

wordsTracker(
    [ 'is the', 
        'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
    );


















