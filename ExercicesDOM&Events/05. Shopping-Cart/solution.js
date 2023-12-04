function solve() {
  const addButtons = Array.from(
    document.querySelectorAll("button.add-product")
  );

 /* const products = {
    Bread: 0.0,
    Milk: 1.09,
    Tomatoes: 0.99,
  };*/
  const checkoutBtn = document.querySelector("button.checkout");
  const textarea = document.querySelector("textarea");
  let boughtProducts = [];
  let totalPrice = 0;

  /*for (const btn of addButtons) {
   btn.addEventListener("click", addElementInCard);
  }*/

  addButtons.forEach((btn) => btn.addEventListener("click", addElementInCard));

  function addElementInCard(e) {
    const currrent = e.currentTarget.parentNode.parentNode;
    const productTitle = currrent.querySelector(".product-title").textContent;
    const productPrice =
      currrent.querySelector(".product-line-price").textContent;

    if (!boughtProducts.includes(productTitle)) {
      boughtProducts.push(productTitle);
    }
    totalPrice += Number(productPrice);

    textarea.value += `Added ${productTitle} for ${productPrice} to the cart.\n`;
  }
  checkoutBtn.addEventListener("click", checkOut);

  function checkOut() {
    textarea.value += `You bought ${boughtProducts.join(", ")} 
  for ${totalPrice.toFixed(2)}.`;

    addButtons.forEach((btn) => {
      btn.removeEventListener("click", addElementInCard);
      btn.disabled = true;
    });
  }
}
