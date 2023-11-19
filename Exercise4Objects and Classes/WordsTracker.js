function wordsTracker(input) {
  /*  const [searchWords, ...words] = input;
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
    
});*/
  let list = input.shift().split(" ");

  let occur = {};
  list.forEach((w) => {
    occur[w] = 0;
    input.forEach((element) => {
      if (w === element) {
        occur[w] ++;
      }
    });
  });
 let entries = Object.entries(occur).sort((a, b) => b[1]  - a[1]);

entries.forEach(element => {
    console.log(`${element[0]} - ${element[1]}`);
});


  //const sortedArr = wordsOccur.sort((a,b)=> a-b);
  //Object.keys(wordsOccur).forEach((key)=>{
  // console.log(`${key} - ${wordsOccur[key]}`);

  //})
}

wordsTracker([
  "is the",
  "first",
  "sentence",
  "Here",
  "is",
  "another",
  "the",
  "And",
  "finally",
  "the",
  "the",
  "sentence",
]);
