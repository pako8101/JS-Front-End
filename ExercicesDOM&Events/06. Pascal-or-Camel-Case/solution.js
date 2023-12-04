function solve() {
  let firstText = document.querySelector("#text").value.toLowerCase();
  const convention = document.querySelector("#naming-convention").value;

  let result = document.querySelector("#result");

  if (convention === "Camel Case") {
    let sentence = [];
    firstText = firstText.split(" ");

    sentence.push(firstText[0]);
    for (let index = 1; index < firstText.length; index++) {
      sentence.push(
        firstText[index].charAt(0).toUpperCase() + firstText[index].slice(1));
    }
   result.textContent = sentence.join('')
  }else if (convention==='Pascal Case') {
    let sentence = [];
    firstText = firstText.split(" ");

    for (let index = 0; index < firstText.length; index++) {
      sentence.push(
        firstText[index].charAt(0).toUpperCase() + firstText[index].slice(1));
    }
    result.textContent = sentence.join('')
  }else{
    result.textContent = 'Error!'
  }

  /* let newString;
  convention === "Camel Case"
    ? newString === toCamelCase(firstText)
    : convention === "Pascal Case"
    ? newString === toPascalCase(firstText)
    : newString === 'Error!';

    result.textContent = newString;

  function toCamelCase(input) {
    return input
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  }

  function toPascalCase(input) {
    const camelCase = toCamelCase(input);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
  }*/
}
