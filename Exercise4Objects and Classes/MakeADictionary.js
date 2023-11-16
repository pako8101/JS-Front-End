function solve(input) {
  const dictionary = input.reduce((acc, curr) => {
    acc = { ...acc, ...JSON.parse(curr) };
    return acc;
  }, {});
  /*1.  const dictionary = input
    //masiv ot stringove ->['','','']
    .map((jsonString) => JSON.parse(jsonString))
    //masiv ot obekti [{},{},{}]
    .reduce((acc,curr) => {
        return {
            ...acc,
            ...curr,
        };*/

  /*2. const dictionary = input
    //masiv ot stringove ->['','','']
    //masiv ot obekti [{},{},{}]
    .reduce((acc,curr) => {
        const term = JSON.parse(curr);
        return {
            ...acc,
            ...term,
        };
    },//masiv  -> properties {cup,'....'}
    {});*/

  const sortedDictionary = Object.keys(dictionary).sort();

  sortedDictionary.forEach((curr) =>
    console.log(`Term: ${curr} => Definition: ${dictionary[curr]}`)
  );

  /* 3. let dictionary = {};
input.forEach((jsonString) => {
    const term = JSON.parse(jsonString);
    dictionary = Object.assign(dictionary,term);
});*/

  //console.log(JSON.stringify(dictionary,null,2));
}

solve([
  '{"Cup":"A small bowl-shaped container for drinking from, typically having a handle"}',
  '{"Cake":"An item of soft sweet food made from a mixture of flour, fat, eggs, sugar, and other ingredients, baked and sometimes iced or decorated."} ',
  '{"Watermelon":"The large fruit of a plant of the gourd family, with smooth green skin, red pulp, and watery juice."} ',
  '{"Music":"Vocal or instrumental sounds (or both) combined in such a way as to produce beauty of form, harmony, and expression of emotion."} ',
  '{"Art":"The expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power."} ',
]);
