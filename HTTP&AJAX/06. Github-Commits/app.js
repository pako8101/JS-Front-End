  async  function loadCommits() {
  // Try it with Fetch API
  const username = document.querySelector("#username").value;
  const repo = document.querySelector("#repo").value;

  if (!username || !repo) {
    console.log("error");
    return;
  }
  const list = document.querySelector("ul");
list.innerHTML = '';
  const response = await 
  fetch(`https://api.github.com/repos/${username}/${repo}/commits`)

  const body = await response.json().catch(alert);
  console.log(body);

  body.forEach(({ commit }) => {
    const item = document.createElement("li");
    item.textContent = commit.message;

    list.appendChild(item);
  });
console.log('test here');
   /* .then((res) => res.json())
    .then((commits) => {
      commits.forEach(({ commit }) => {
        const item = document.createElement("li");
        item.textContent = commit.message;

        list.appendChild(item);
      });
    });*/
    
}
