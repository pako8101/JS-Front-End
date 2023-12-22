window.addEventListener("load", solve);

function solve() {
    const addBtn = document.getElementById('add-btn');
    const placeInput = document.getElementById('place');
    const actionInput = document.getElementById('action');
    const personInput = document.getElementById('person');
    const taskList = document.getElementById('task-list');
    const doneList = document.getElementById('done-list');
  
    addBtn.addEventListener('click', addTask);
  
    function addTask() {
      const place = placeInput.value.trim();
      const action = actionInput.value.trim();
      const person = personInput.value.trim();
  
      if (!place || !action || !person) {
        return;
      }
  
      const taskItem = createTaskItem(place, action, person);
      taskList.appendChild(taskItem);
  
      clearInputFields();
    }
  
    function createTaskItem(place, action, person) {
      const taskItem = document.createElement('li');
      taskItem.classList.add('clean-task');
  
      const article = document.createElement('article');
      article.innerHTML = `
        <p>Place: ${place}</p>
        <p>Action: ${action}</p>
        <p>Person: ${person}</p>
      `;
  
      const buttonsDiv = document.createElement('div');
      buttonsDiv.classList.add('buttons');
  
      const editBtn = document.createElement('button');
      editBtn.classList.add('edit');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => editTask(taskItem, place, action, person));
  
      const doneBtn = document.createElement('button');
      doneBtn.classList.add('done');
      doneBtn.textContent = 'Done';
      doneBtn.addEventListener('click', () => moveTaskToDone(taskItem));
  
      buttonsDiv.appendChild(editBtn);
      buttonsDiv.appendChild(doneBtn);
  
      taskItem.appendChild(article);
      taskItem.appendChild(buttonsDiv);
  
      return taskItem;
    }
  
    function editTask(taskItem, place, action, person) {
      placeInput.value = place;
      actionInput.value = action;
      personInput.value = person;
  
      taskList.removeChild(taskItem);
    }
  
    function moveTaskToDone(taskItem) {
      const deleteBtn = createDeleteButton(() => deleteDoneTask(taskItem));
      
      taskItem.removeChild(taskItem.querySelector('.buttons'));
      taskItem.appendChild(deleteBtn);
      
      doneList.appendChild(taskItem);
    }
  
    function createDeleteButton(callback) {
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', callback);
      return deleteBtn;
    }
  
    function deleteDoneTask(taskItem) {
      doneList.removeChild(taskItem);
    }
  
    function clearInputFields() {
      placeInput.value = '';
      actionInput.value = '';
      personInput.value = '';
    }
  // const addBtn = document.getElementById('add-btn');
  // const taskList = document.getElementById('task-list');
  // const doneList = document.getElementById('done-list');

  // addBtn.addEventListener('click', addTask);

  // function addTask() {
  //     const placeInput = document.getElementById('place');
  //     const actionInput = document.getElementById('action');
  //     const personInput = document.getElementById('person');

  //     const place = placeInput.value.trim();
  //     const action = actionInput.value.trim();
  //     const person = personInput.value.trim();

  //     if (place === '' || action === '' || person === '') {
  //         return;
  //     }

  //     const task = createTaskElement(place, action, person);
  //     taskList.appendChild(task);

  //     // Clear input fields
  //     placeInput.value = '';
  //     actionInput.value = '';
  //     personInput.value = '';
  // }

  // function createTaskElement(place, action, person) {
  //     const li = document.createElement('li');
  //     li.classList.add('clean-task');

  //    // const article = document.createElement('article');

  //     // let pl = document.createElement("p");
  //     // pl.textContent = place;

  //     // let act = document.createElement("p");
  //     // act.textContent = action;
  //     // let per = document.createElement("p");
  //     // per.textContent = person;
  //     //   contentDiv.appendChild(pl);
  //     // contentDiv.appendChild(act);
  //     // contentDiv.appendChild(per);
  //     article.innerHTML = `
  //         <p>Place:${place}</p>
  //         <p>Action:${action}</p>
  //         <p>Person:${person}</p>
  //     `;

  //     const buttonsDiv = document.createElement('div');
  //     buttonsDiv.classList.add('buttons');

  //     const editBtn = document.createElement('button');
  //     editBtn.textContent = 'Edit';
  //     editBtn.addEventListener('click', () => editTask(li, place, action, person));

  //     const doneBtn = document.createElement('button');
  //     doneBtn.textContent = 'Done';
  //     doneBtn.addEventListener('click', () => moveTaskToDone(li));

  //     buttonsDiv.appendChild(editBtn);
  //     buttonsDiv.appendChild(doneBtn);

  //     li.appendChild(article);
  //     li.appendChild(buttonsDiv);

  //     return li;
  // }

  // function editTask(taskElement, place, action, person) {
  //     const placeInput = document.getElementById('place');
  //     const actionInput = document.getElementById('action');
  //     const personInput = document.getElementById('person');

  //     placeInput.value = place;
  //     actionInput.value = action;
  //     personInput.value = person;

  //     taskElement.remove();
  // }

  // function moveTaskToDone(taskElement) {
  //     const deleteBtn = document.createElement('button');
  //     deleteBtn.textContent = 'Delete';
  //     deleteBtn.addEventListener('click', () => deleteDoneTask(taskElement));

  //     taskElement.appendChild(deleteBtn);
  //     doneList.appendChild(taskElement);

  //     // Remove edit and done buttons
  //     taskElement.querySelector('.buttons').remove();
  // }

  // function deleteDoneTask(taskElement) {
  //     taskElement.remove();
  // }
}

// function solve() {
//   const addBtn = document.getElementById("add-btn");
//   const taskList = document.getElementById("task-list");
//   const doneList = document.getElementById("done-list");

//   addBtn.addEventListener("click", addTask);

//   function addTask() {
//     const placeInput = document.getElementById("place");
//     const actionInput = document.getElementById("action");
//     const personInput = document.getElementById("person");
//     const place = placeInput.value.trim();
//     const action = actionInput.value.trim();
//     const person = personInput.value.trim();

//     if (place === "" || action === "" || person === "") {
//       return;
//     }

//     const task = createTaskElement(place, action, person);
//     taskList.appendChild(task);

//     // Clear input fields
//     placeInput.value = "";
//     actionInput.value = "";
//     personInput.value = "";
//   }

//   function createTaskElement(place, action, person) {
//     const li = document.createElement("li");
//     li.classList.add("clean-task");

//     const article = document.createElement("article");
//     const placeParagraph = document.createElement("p");
//     placeParagraph.textContent = `Place:${place}`;
//     const actionParagraph = document.createElement("p");
//     actionParagraph.textContent = `Action:${action}`;
//     const personParagraph = document.createElement("p");
//     personParagraph.textContent = `Person:${person}`;

//     article.appendChild(placeParagraph);
//     article.appendChild(actionParagraph);
//     article.appendChild(personParagraph);

//     const buttonsDiv = document.createElement("div");
//     buttonsDiv.classList.add("buttons");

//     const editButton = document.createElement("button");
//     editButton.textContent = "Edit";
//     editButton.addEventListener("click", () =>
//       editTask(li, place, action, person)
//     );

//     const doneButton = document.createElement("button");
//     doneButton.textContent = "Done";
//     doneButton.addEventListener("click", () => moveTaskToDone(li));

//     buttonsDiv.appendChild(editButton);
//     buttonsDiv.appendChild(doneButton);

//     li.appendChild(article);
//     li.appendChild(buttonsDiv);

//     return li;
//   }

//   function editTask(taskElement, place, action, person) {
//     const placeInput = document.getElementById("place");
//     const actionInput = document.getElementById("action");
//     const personInput = document.getElementById("person");

//     placeInput.value = place;
//     actionInput.value = action;
//     personInput.value = person;
// taskElement.remove();
//    //taskList.removeChild(taskElement);

//   }

//   function moveTaskToDone(taskElement) {
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "Delete";
//     deleteButton.addEventListener("click", () => deleteDoneTask(taskElement));

//     taskElement.appendChild(deleteButton);
//     doneList.appendChild(taskElement);

//     // Remove edit and done buttons
//     taskElement.querySelector(".buttons").remove();
//   }

//   function deleteDoneTask(taskElement) {
//     taskElement.remove();
//   }
// }
