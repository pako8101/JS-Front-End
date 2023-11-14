function addItem() {
    const textInput = document.querySelector('#newItemText');
    const valueInput = document.querySelector('#newItemValue');

    const option = document.createElement('option');
option.textContent = textInput.value;
option.value  =valueInput.value;
   // option.setAttribute('value',valueInput.value);

    const select = document.querySelector('#menu');
    select.appendChild(option);
    clearInputs(textInput,valueInput);

function clearInputs(...inputs) {
    inputs.forEach((input) => (input.value = ""))
}
}