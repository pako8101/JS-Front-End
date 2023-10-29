
function calcFruitPrice(fruit,weightInGrams,pricePerKg) {
    const weigthInKg = (weightInGrams / 1000).toFixed(2);
const totalPrice = (weigthInKg * pricePerKg).toFixed(2);
console.log(
    `I need $${totalPrice} to buy ${weigthInKg} kilograms ${fruit}.`
);


}

calcFruitPrice('orange',2500,1.8);















