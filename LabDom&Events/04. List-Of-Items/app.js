function addItem() {
    const value = document.querySelector("#newItemText").value;

    const item = document.createElement("li");
document.querySelector("ul").appendChild(item);
item.textContent = value;

    //document.querySelector("ul").innerHTML += ` <li>${value}</li>`;

}