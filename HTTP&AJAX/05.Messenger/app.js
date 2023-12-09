function attachEvents() {
  const baseURL = "http://localhost:3030/jsonstore/messenger";

  const [nameIn, contentIn, sendButton, refreshButton] =
    document.getElementsByTagName("input");

  const messagesTextArea = document.getElementById("messages");

  sendButton.addEventListener("click", action);

  async function action() {
    const messageFormat = {
      author: nameIn.value,
      content: contentIn.value,
    };
    let isValid = nameIn.value !== "" && contentIn.value !== "";
    if (isValid) {
      await fetch(baseURL, {
        method: "POST",
        body: JSON.stringify(messageFormat),
      });
    }
    nameIn.value = "";
    contentIn.value = "";
  }
  refreshButton.addEventListener('click', buttonAction);

 async function buttonAction() {
   const response =  await fetch(baseURL);
   const messages = await response.json();
const messagesToDisplay = [];
   for (const messInfo of Object.values(messages)) {
    messagesToDisplay.push(`${messInfo.author}: ${messInfo.content}`);
   }
   messagesTextArea.textContent = messagesToDisplay.join('\n');
  }





  /* document.querySelector("#refresh").addEventListener("click", getMessages);
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
  //});*/
}

attachEvents();
