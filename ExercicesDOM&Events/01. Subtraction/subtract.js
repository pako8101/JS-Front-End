function subtract() {
const inputs = Array.from(document.querySelectorAll("input"));
inputs.forEach((input) => {
    input.removeAttribute("disabled");
    input.addEventListener("keyup",handler)
});

  /*  const firstNumInput = document.querySelector("#firstNumber");
    const secondNumInput =  document.querySelector("#secondNumber");

    firstNumInput.removeAttribute("disabled");
    secondNumInput.removeAttribute("disabled");

    firstNumInput.addEventListener("keydown",handler);
    secondNumInput.addEventListener("keydown",handler);*/
}

function handler() {
    const firstNum = Number(document.querySelector("#firstNumber").value);
    const secondNum = Number(document.querySelector("#secondNumber").value);

    let sum = firstNum - secondNum;
    
    const result = document.querySelector("#result");
    result.textContent = sum;
}