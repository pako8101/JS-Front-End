// TODO:
const taskSections = {
  ToDo: document.querySelector("#todo-section .task-list"),
  "In Progres": document.querySelector("#in-progress-section.task-list"),
  "Code Review": document.querySelector("#code-review-section.task-list"),
  Done: document.querySelector("#done-section.task-list"),
};
const statusToNextStatusMap = {
  ToDo: "In Progres",
  "In Progres": "Code Review",
  "Code Review": "Done",
  Done: "Close",
};
const inputs = {
  title: document.querySelector("#title"),
  description: document.querySelector("#description"),
};

const API_URL = "http://localhost:3030/jsonstore/tasks/";
let tasks = [];
function attachEvents() {
  document
    .querySelector("#load-board-btn")
    .addEventListener("click", loadTasks);

  document
    .querySelector("#create-task-btn")
    .addEventListener("click", createTask);
}
async function loadTasks() {
  tasks = await (await fetch(API_URL)).json();

  Object.values(taskSections).forEach((section) => (section.textContent = ""));

  Object.values(tasks).forEach((task) => {
    const section = taskSections[task.status];
    const item = createElement("li", null, ["task"], null, section);
    createElement("h3", task.title, [], null, item);
    createElement("p", task.description, [], null, item);
    createElement(
      "button",
      statusToNextStatusMap[task.status] === 'Close' ? 'Close'
     :  `Move to ${statusToNextStatusMap[task.status]}`,
      [],
      task_id,
      item
    );
    button.addEventListener("click", moveTask);
  });
}
async function createTask() {
  if (Object.values(inputs).some((input) => input.value === "")) {
    return;
  }
  const task = {
    title: inputs.title.value,
    description: inputs.description.value,
    status: "ToDo",
  };
  await fetch(API_URL, {
    method: "POST",
    body: JSON.stringify(task),
  });
  loadTasks();
  inputs.title.value = "";
  inputs.title.description = "";
}
function moveTask(e) {
  const task = tasks[e.currentTarget.getAttribute("id")];
  let method = "PATCH";
  let body = JSON.stringify({
    ...task,
    status: statusToNextStatusMap[task.status],
  });
  if (task.status === "Done") {
    method = "DELETE";
    body = undefined;
  }
  fetch(`${API_URL}/${task_id}`, {
    method,
    body,
  });
  loadTasks();
}

function createElement(type, content, classes, id, parent) {
  const element = document.createElement(type);
  if (content) {
    element.textContent = content;
  }
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
  if (id) {
    element.setAttribute("id", id);
  }
  if (parent) {
    parent.appendChild(element);
  }
  return element;
}
attachEvents();
