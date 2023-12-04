function search() {
  let listItems = Array.from(document.querySelectorAll("li"));
  let searching = document.getElementById("searchText").value;

  let result = document.getElementById("result");
  let matches = 0;

  /* for (const li of listItems) {
    li.style.fontWeight = "";
    li.style.textDecoration = "";
  }

  for (const li of listItems) {
    if (li.textContent.includes(searching)) {
      matches++;
      li.style.fontWeight = "bold";
      li.style.textDecoration = "underline";
    }
  }
  result.textContent = `${matches} matches found`;*/

  listItems.forEach((li) => {
    li.style.fontWeight = "";
    li.style.textDecoration = "";
  });

  listItems.forEach((li) => {
    if (li.textContent.includes(searching)) {
      matches++;
      li.style.fontWeight = "bold";
      li.style.textDecoration = "underline";
    }

  });
 result.textContent = `${matches} matches found`;
 

  /*const res = listItems.reduce((acc,curr) => {
   curr.textContent.includes(searching) ?
   matches++ ?
    acc.style.fontWeight = 'bold'
: result = `${matches} matches found`;
return acc;
 },{})*/
}
