function solve() {
  const input = document.querySelector("#input").value.split(".");

  input.pop();
  const container = document.querySelector("#output");

  //Aprroach 1
  while (input.length > 0) {
    const p = document.createElement("p");
    p.textContent = input
    .splice(0, 3)
    .map((text)=>text.trim())
    .join(".");
    container.appendChild(p);
  }

  // Approach 2

  /*input.reduce((acc,curr) => {
    if (acc.length === 3) {
      const p = document.createElement("p");
      p.textContent = input.splice(0, 3)
      .map((text)=>text.trim())
      .join(".");
      container.appendChild(p);
      return [];
    }
    return [...acc,curr]
  }, []);*/

}
