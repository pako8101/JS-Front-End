function solve(currentStock,deliveredStock) {
  /*  const products = [...currentStock, ...deliveredStock];
    //currentStock.concat(deliveredStock);
    const stock =  products.reduce((acc,curr,i) =>{
        if (i % 2 !==0) {
            return acc;
        }
            if (!acc.hasOwnProperty(curr)) {
                acc[curr] = 0;
            }
                acc[curr] += Number(products[i+1]) ;
        
  /* const stock =  products.reduce((acc,curr,i) =>{
if (i% 2===0) {
    if (!acc.hasOwnProperty(curr)) {
        acc[curr] =Number(products[i+1]) ;
    }else{
        acc[curr] += Number(products[i+1]) ;
    }
}*/
/*return acc;
    },{})

Object.keys(stock).forEach((key)=>{
    console.log(`${key} -> ${stock[key]}`);
})*/

//const stock = {};
const stock = {};
for (let index = 0; index < currentStock.length; index+=2) {
    let product = currentStock[index];
    let quantity = Number(currentStock[index+1]);

    !stock.hasOwnProperty(product) ? stock[product] = quantity
    : stock[product] += quantity;

}
for (let index = 0; index < deliveredStock.length; index+=2) {
    let product = deliveredStock[index];
    let quantity = Number(deliveredStock[index+1]);

    !stock.hasOwnProperty(product) ? stock[product] = quantity
    : stock[product] += quantity;

}
  // Object.keys(products).forEach((key)=>{
   // console.log(`${key} -> ${products[key]}`);
//})
for (const key in stock) {
   console.log(`${key} -> ${stock[key]}`);
}
}



solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
    );








