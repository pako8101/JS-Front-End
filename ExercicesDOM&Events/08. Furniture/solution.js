function solve() {
  const button = document.querySelector("#exercise button");
  button.addEventListener("click", parseFurnitureInput);
}

function parseFurnitureInput() {
  const input = JSON.parse(document.querySelector("#exercise textarea").value);
  const tableBody = document.querySelector("tbody");
  input
    .map((furniture) => {
      const row = document.createElement("tr");

      const imageCell = document.createElement("td");
      const image = document.createElement("img");
      image.src = furniture.img;
      imageCell.appendChild(image);

      const nameCell = document.createElement("td");
      nameCell.textContent = furniture.name;

      const priceCell = document.createElement("td");
      priceCell.textContent = furniture.price;

      const factoryCell = document.createElement("td");
      factoryCell.textContent = furniture.deFactor;

      const checkCell = document.createElement("td");
      const checkBox = document.createElement("input");
      checkBox.type = "checkbox";
      checkCell.appendChild(checkBox);
      row.appendChild(imageCell);
      row.appendChild(priceCell);
      row.appendChild(nameCell);
      row.appendChild(factoryCell);
      row.appendChild(checkCell);

      return row;
    })
    .forEach((row) => {
      tableBody.appendChild(row);
    });
}
