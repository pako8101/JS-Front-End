function solve(obj) {
  const mayInnerObj = obj; //taka promenia i vunshnite stoinosti
  // const mayInnerObj = { ...obj};// taka se syzdawa now obekt i ne promenia vunshnite
  mayInnerObj.a = 50;
  mayInnerObj.c.x = 10;
}

const myObj = {
  a: 1,
  b: 2,
  c: {
    x: 1,
  },
};

solve(myObj);

console.log(JSON.stringify(myObj));
