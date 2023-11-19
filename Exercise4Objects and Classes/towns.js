function solve(input) {
   /* input
    .map((city) => {
const [town, latitude, longitude] = city.split(' | ');
return{town, latitude:Number(latitude).toFixed(2), longitude:Number(longitude).toFixed(2)}
    }).forEach(city => {
          console.log(city);
    });;*/
  
    for (const town of input) {
        let [t,l,lo] = town.split(' | ');

        let currentT =  {
            town,
            latitude:Number(l).toFixed(2),
            longitude:Number(lo).toFixed(2)
        };
        console.log(currentT);
    }

}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
);








