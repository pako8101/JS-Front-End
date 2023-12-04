function generateReport() {
    let personObject = {};
let personAllObj = [];
let columnsSetNumbers = [];
//1
let columnsAll = document.querySelectorAll('thead tr th input');
        //'body > main > table > tbody > tr:nth-child(1)'
for (let index = 0; index < columnsAll.length; index++) {
   let checkboxState = columnsAll[index].checked;
    if (checkboxState) {
        columnsSetNumbers.push(index);
    }
}
let columnTitles = document.querySelectorAll(
    'thead tr')[0].getElementsByTagName('th');
let rowsCount = document.querySelectorAll('tbody tr').length;

for (let row = 0; row < rowsCount; row++) {

    columnsSetNumbers.forEach((element) => {
         let key =columnTitles[element].textContent.trim().toLowerCase();
         let value = document.querySelectorAll('tbody tr')[row]
         .getElementsByTagName['td'][element].textContent;
        personObject[key] = value;
    });
    personAllObj.push(Object.assign(personObject));
    personObject = {};
    
}
document.getElementById('output').innerHTML = JSON.stringify(personAllObj,2,null)

}