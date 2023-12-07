function attachEvents() {
  document.querySelector("#refresh").addEventListener("click", getMessages);
  document.querySelector("#submit").addEventListener("click", sendMessages);
}

async function sendMessages() {
  const author = document.querySelector('input[name="author"]').value;
  const content = document.querySelector('input[name="content"]').value;
    const response = await fetch("http://localhost:3030/jsonstore/messenger", {
    method: "POST",
    body: JSON.stringify({ author, content }),
  });
}

async function getMessages(params) {
  const messages = await (
    await fetch("http://localhost:3030/jsonstore/messenger")
  ).json();

  const messageBox = document.querySelector("#messages");
  messageBox.textContent = "";
  Object.values(messages).reduce(
    (acc, curr) => acc + `${curr.author}: ${curr.content}\n`,
    ""
  );

  //.forEach((message) => {
  //  const messageElement = document.createElement("div");
  // messageElement.textContent = `${message.author}: ${message.content}`;
  // messageBox.textContent += messageElement
  //});
}

attachEvents();
