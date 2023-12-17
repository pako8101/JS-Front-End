// // // window.addEventListener("load", solve);

// // //  function solve() {
// // //     const expenseTypeInput = document.getElementById('expense');
// // //     const amountInput = document.getElementById('amount');
// // //     const dateInput = document.getElementById('date');
// // //     const addBtn = document.getElementById('add-btn');
// // //     const previewList = document.getElementById('preview-list');
// // //     const expensesList = document.getElementById('expenses-list');
// // //     const deleteBtn = document.querySelector('.delete');

// // //     let editedItem = null;

// // //     addBtn.addEventListener('click', function () {
// // //         const expenseType = expenseTypeInput.value.trim();
// // //         const amount = amountInput.value.trim();
// // //         const date = dateInput.value;

// // //         if (expenseType && amount && date) {
// // //             if (editedItem) {
               
// // //                 editedItem.querySelector('.expense-type').textContent = expenseType;
// // //                 editedItem.querySelector('.amount').textContent = amount;
// // //                 editedItem.querySelector('.date').textContent = date;
// // //                // editedItem = null;
// // //             } else {
               
// // //                 const listItem = document.createElement('li');
// // //                 listItem.innerHTML = `
// // //                     <span class="expense-type">${expenseType}</span>
// // //                     <span class="amount">${amount}</span>
// // //                     <span class="date">${date}</span>
// // //                     <button class="edit-btn">Edit</button>
// // //                     <button class="ok-btn">Ok</button>
// // //                 `;
// // //                 previewList.appendChild(listItem);
// // //             }

          
// // //             expenseTypeInput.value = '';
// // //             amountInput.value = '';
// // //             dateInput.value = '';

           
// // //             addBtn.disabled = true;
// // //         }
// // //     });

   
// // //     previewList.addEventListener('click', function (e) {
// // //         if (e.target.classList.contains('edit-btn')) {
           
// // //             editedItem = e.target.closest('li');

           
// // //             expenseTypeInput.value = editedItem.querySelector('.expense-type').textContent;
// // //             amountInput.value = editedItem.querySelector('.amount').textContent;
// // //             dateInput.value = editedItem.querySelector('.date').textContent;

// // //             addBtn.disabled = false;
// // //             editedItem.remove();

           
           
// // //         } else if (e.target.classList.contains('ok-btn')) {
            
// // //             const expenseItem = e.target.closest('li');
// // //             expensesList.appendChild(expenseItem);

          
// // //             expenseItem.querySelector('.edit-btn').remove();
// // //             expenseItem.querySelector('.ok-btn').remove();

            
// // //             addBtn.disabled = false;
// // //         }
// // //     });

    
// // //     deleteBtn.addEventListener('click', function () {
// // //         location.reload();
// // //     });
// // // };
// // function solve() {
// //     const addBtn = document.getElementById('add-btn');
// //     const editBtn = document.getElementById('edit-btn');
// //     const deleteBtn = document.querySelector('#expenses button.delete');
// //     const okBtn = document.querySelector('#preview button.ok');
// //     const expenseTypeInput = document.getElementById('expense');
// //     const amountInput = document.getElementById('amount');
// //     const dateInput = document.getElementById('date');
// //     const previewList = document.getElementById('preview-list');
// //     const expensesList = document.getElementById('expenses-list');

// //     addBtn.addEventListener('click', addItem);
// //     editBtn.addEventListener('click', editItem);
// //     deleteBtn.addEventListener('click', deleteExpenses);
// //     okBtn.addEventListener('click', addExpenses);

// //     function addItem() {
// //         const expenseType = expenseTypeInput.value.trim();
// //         const amount = amountInput.value.trim();
// //         const date = dateInput.value.trim();

// //         if (!expenseType || !amount || !date) {
// //             return;
// //         }

// //         const liElement = document.createElement('li');
// //         liElement.innerHTML = `
// //             <span>${expenseType}</span>
// //             <span>${amount}</span>
// //             <span>${date}</span>
// //             <button class="edit">Edit</button>
// //             <button class="delete">Delete</button>
// //         `;

// //         previewList.appendChild(liElement);
// //         clearInputs();
// //         disableAddButton();
// //     }

// //     function editItem() {
// //         const selectedItem = previewList.querySelector('li');

// //         if (selectedItem) {
// //             const [expenseType, amount, date] = selectedItem.querySelectorAll('span');

// //             expenseTypeInput.value = expenseType.textContent;
// //             amountInput.value = amount.textContent;
// //             dateInput.value = date.textContent;

// //             selectedItem.remove();
// //             enableAddButton();
// //         }
// //     }

// //     function addExpenses() {
// //         const selectedItem = previewList.querySelector('li');

// //         if (selectedItem) {
// //             expensesList.appendChild(selectedItem);
// //             clearInputs();
// //             disableOkButton(selectedItem);
// //         }
// //     }

// //     function deleteExpenses() {
// //         location.reload();
// //     }

// //     function clearInputs() {
// //         expenseTypeInput.value = '';
// //         amountInput.value = '';
// //         dateInput.value = '';
// //     }

// //     function disableAddButton() {
// //         addBtn.disabled = true;
// //     }

// //     function enableAddButton() {
// //         addBtn.disabled = false;
// //     }

// //     function disableOkButton(item) {
// //         const editButton = item.querySelector('.edit');
// //         const deleteButton = item.querySelector('.delete');

// //         editButton.remove();
// //         deleteButton.remove();
// //     }
// // }

// function solve() {
//     const addBtn = document.getElementById('add-btn');
//     const previewList = document.getElementById('preview-list');
//     const expensesList = document.getElementById('expenses-list');
//     const expenseInput = document.getElementById('expense');
//     const amountInput = document.getElementById('amount');
//     const dateInput = document.getElementById('date');

//     addBtn.addEventListener('click', addExpense);

//     function addExpense() {
//         const expense = expenseInput.value.trim();
//         const amount = amountInput.value.trim();
//         const date = dateInput.value.trim();

//         if (expense === '' || amount === '' || date === '') {
//             return;
//         }

//         const listItem = createListItem(expense, amount, date, true);
//         previewList.appendChild(listItem);

//         clearInputs();
//         disableButton(addBtn);
//     }

//     function editExpense(button) {
//         const listItem = button.parentElement;
//         const [expense, amount, date] = listItem.textContent.split(' - ');

//         expenseInput.value = expense;
//         amountInput.value = amount;
//         dateInput.value = date;

//         listItem.remove();
//         enableButton(addBtn);
//     }

//     function addToExpenses(button) {
//         const listItem = button.parentElement;
//         listItem.querySelector('.edit-btn').remove();
//         listItem.querySelector('.ok-btn').remove();

//         expensesList.appendChild(listItem);

//         enableButton(addBtn);
//     }

//     function deleteExpenses(button) {
//         const listItem = button.parentElement;
//         listItem.remove();
//         reloadApplication();
//     }

//     function createListItem(expense, amount, date, isPreview) {
//         const listItem = document.createElement('li');
//         listItem.innerHTML = `
//             <span>${expense}</span> -
//             <span>${amount}</span> -
//             <span>${date}</span>
//         `;

//         if (isPreview) {
//             const editBtn = createButton('Edit', 'edit-btn', () => editExpense(editBtn));
//             const okBtn = createButton('Ok', 'ok-btn', () => addToExpenses(okBtn));

//             listItem.appendChild(editBtn);
//             listItem.appendChild(okBtn);
//         } else {
//             const deleteBtn = createButton('Delete', 'delete-btn', () => deleteExpenses(deleteBtn));
//             listItem.appendChild(deleteBtn);
//         }

//         return listItem;
//     }

//     function createButton(text, className, onClick) {
//         const button = document.createElement('button');
//         button.textContent = text;
//         button.className = className;
//         button.addEventListener('click', onClick);
//         return button;
//     }

//     function disableButton(button) {
//         button.setAttribute('disabled', true);
//     }

//     function enableButton(button) {
//         button.removeAttribute('disabled');
//     }

//     function clearInputs() {
//         expenseInput.value = '';
//         amountInput.value = '';
//         dateInput.value = '';
//     }

//     function reloadApplication() {
//         // Assuming this function should reload the application
//         location.reload();
//     }
// }
window.addEventListener("load", solve);

function solve() {
    // 1. Get the information from the form and add it as event listener to Add button
    // extracting all elements from the DOM
    let expenseType = document.getElementById("expense");
    let amount = document.getElementById("amount");
    let date = document.getElementById("date");
    let addButton = document.getElementById("add-btn");
    let ulPreviewList = document.getElementById("preview-list");
    let ulExpensesList = document.getElementById("expenses-list");
    let deleteButton = document.querySelector(".btn.delete"); // TODO: double check if it is correctly selected

    

    // adding event listener to Add button (check the input not to be empty)
    addButton.addEventListener('click', () => {
        
        // extracting the input values to be used later in edit functionality
        let amountValue = amount.value;
        let expenseTypeValue = expenseType.value;
        let dateValue = date.value;
        
        // checking if the input fields are empty
        if (expenseType.value === '' || amount.value === '' || date.value === '') {
            return;
        }
        // creating the empty elements with their class names
        let li = document.createElement("li");
        li.className = 'expense-item';
        let article = document.createElement("article");
        let pType = document.createElement("p");
        let pAmount = document.createElement("p");
        let pDate = document.createElement("p");
        let divButtons = document.createElement("div");
        divButtons.className = 'buttons';
        let editButton = document.createElement("button");
        editButton.className = 'btn edit';
        editButton.textContent = 'edit';
        let okButton = document.createElement("button");
        okButton.className = 'btn ok';
        okButton.textContent = 'ok';

        // adding the input values to the elements
        pType.textContent = `Type: ${expenseType.value}`;
        pAmount.textContent = `Amount: ${amount.value}$`;
        pDate.textContent = `Date: ${date.value}`;

        // appending the elements to the DOM
        divButtons.appendChild(editButton);
        divButtons.appendChild(okButton);
        article.appendChild(pType);
        article.appendChild(pAmount);
        article.appendChild(pDate);
        li.appendChild(article);
        li.appendChild(divButtons);
        ulPreviewList.appendChild(li);

        // disabling the Add button and clearing the input fields
        addButton.disabled = true;
        document.getElementById("expense").value = '';
        document.getElementById("amount").value = '';
        document.getElementById("date").value = '';

        // 2. Edit the Information
        // adding event listener to Edit button
        editButton.addEventListener('click', () => {
        // adding the values from the previous list back to the input fields
        document.getElementById("expense").value = expenseTypeValue; 
        document.getElementById('amount').value = amountValue;
        document.getElementById('date').value = dateValue;

        // removing the previous list
        ulPreviewList.removeChild(li);

        // enabling the Add button
        addButton.disabled = false;
    })

    // 3. Add to Expenses (Using the OK button)
    // adding event listener to OK button
    okButton.addEventListener('click', () => {
        // removing the previous list
        ulPreviewList.removeChild(li);
        // adding the element under expenses list
        ulExpensesList.appendChild(li);
        
        // removing the OK and Edit buttons
        li.removeChild(divButtons);
        // enabling the Add button
        addButton.disabled = false;
    })

    // 4. Delete Expenses
    // adding event listener to Delete button
    deleteButton.addEventListener('click', () => {
        // deleting the expenses list
        ulExpensesList.remove();
        // reloading the page
        location.reload();
        })
    })

    

}