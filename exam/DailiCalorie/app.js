// // const baseUrl = 'http://localhost:3030/jsonstore/tasks';

// // async function loadMeals() {
// //   const response = await fetch(baseUrl);
// //   const data = await response.json();

// //   const listContainer = document.getElementById('list');
// //   listContainer.innerHTML = '';

// //   Object.entries(data).forEach(([id, meal]) => {
// //     const listItem = createMealListItem(meal, id);
// //     listContainer.appendChild(listItem);
// //   });
// // }

// // function createMealListItem(meal, id) {
// //   const listItem = document.createElement('div');
// //   listItem.className = 'meal';
// //   listItem.innerHTML = `
// //     <span>${meal.food}</span>
// //     <span>${meal.time}</span>
// //     <span>${meal.calories}</span>
// //     <button onclick="editMeal('${id}')">Edit</button>
// //     <button onclick="deleteMeal('${id}')">Delete</button>
// //   `;
// //   return listItem;
// // }

// // async function addMeal() {
// //   const foodInput = document.getElementById('food');
// //   const timeInput = document.getElementById('time');
// //   const caloriesInput = document.getElementById('calories');

// //   const meal = {
// //     food: foodInput.value,
// //     time: timeInput.value,
// //     calories: caloriesInput.value,
// //   };

// //   await fetch(baseUrl, {
// //     method: 'POST',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify(meal),
// //   });

// //   await loadMeals();
// //   clearInputFields();
// // }

// // function editMeal(id) {
// //   const editButton = document.getElementById('editBtn');
// //   const addButton = document.getElementById('addBtn');

// //   editButton.disabled = false;
// //   addButton.disabled = true;

// //   fetch(`${baseUrl}/${id}`)
// //     .then(response => response.json())
// //     .then(data => {
// //       const foodInput = document.getElementById('food');
// //       const timeInput = document.getElementById('time');
// //       const caloriesInput = document.getElementById('calories');

// //       foodInput.value = data.food;
// //       timeInput.value = data.time;
// //       caloriesInput.value = data.calories;
// //     });
// // }

// // async function updateMeal() {
// //   const foodInput = document.getElementById('food');
// //   const timeInput = document.getElementById('time');
// //   const caloriesInput = document.getElementById('calories');

// //   const id = document.getElementById('editBtn').dataset.id;

// //   const updatedMeal = {
// //     food: foodInput.value,
// //     time: timeInput.value,
// //     calories: caloriesInput.value,
// //   };

// //   await fetch(`${baseUrl}/${id}`, {
// //     method: 'PUT',
// //     headers: { 'Content-Type': 'application/json' },
// //     body: JSON.stringify(updatedMeal),
// //   });

// //   await loadMeals();
// //   clearInputFields();
// //   enableAddButton();
// // }

// // async function deleteMeal(id) {
// //   await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
// //   await loadMeals();
// // }

// // function clearInputFields() {
// //   const foodInput = document.getElementById('food');
// //   const timeInput = document.getElementById('time');
// //   const caloriesInput = document.getElementById('calories');

// //   foodInput.value = '';
// //   timeInput.value = '';
// //   caloriesInput.value = '';
// // }

// // function enableAddButton() {
// //   const editButton = document.getElementById('editBtn');
// //   const addButton = document.getElementById('addBtn');

// //   editButton.disabled = true;
// //   addButton.disabled = false;
// // }


// // loadMeals();

// document.addEventListener('DOMContentLoaded', () => {
//     const loadMealsBtn = document.getElementById('load-meals');
//     const addMealBtn = document.getElementById('add-meal');
//     const editMealBtn = document.getElementById('edit-meal');
//     const deleteMealBtn = document.getElementById('delete-meal');
//     const mealList = document.getElementById('meal-list');
//     const mealForm = document.getElementById('meal-form');
    
//     const baseUrl = 'http://localhost:3030/jsonstore/tasks/';

//     loadMealsBtn.addEventListener('click', loadMeals);
//     addMealBtn.addEventListener('click', addMeal);
//     editMealBtn.addEventListener('click', editMeal);
//     deleteMealBtn.addEventListener('click', deleteMeal);

//     function loadMeals() {
//         fetch(baseUrl)
//             .then(response => response.json())
//             .then(data => {
//                 mealList.innerHTML = '';
//                 Object.entries(data).forEach(([id, meal]) => {
//                     const mealItem = createMealItem(id, meal);
//                     mealList.appendChild(mealItem);
//                 });
//             })
//             .catch(error => console.error('Error:', error));
//     }

//     function createMealItem(id, meal) {
//         const mealItem = document.createElement('div');
//         mealItem.classList.add('meal-item');
//         mealItem.innerHTML = `
//             <p>${meal.food} - ${meal.time} - ${meal.calories}</p>
//             <button data-id="${id}" class="edit-btn">Edit Meal</button>
//             <button data-id="${id}" class="delete-btn">Delete Meal</button>
//         `;
//         return mealItem;
//     }

//     function addMeal() {
//         const food = mealForm.querySelector('#food').value;
//         const time = mealForm.querySelector('#time').value;
//         const calories = mealForm.querySelector('#calories').value;

//         if (food && time && calories) {
//             fetch(baseUrl, {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ food, time, calories })
//             })
//             .then(response => response.json())
//             .then(() => {
//                 loadMeals();
//                 mealForm.reset();
//             })
//             .catch(error => console.error('Error:', error));
//         }
//     }

//     function editMeal() {
//         const selectedId = mealForm.getAttribute('data-id');
//         const food = mealForm.querySelector('#food').value;
//         const time = mealForm.querySelector('#time').value;
//         const calories = mealForm.querySelector('#calories').value;

//         if (selectedId && food && time && calories) {
//             fetch(`${baseUrl}/${selectedId}`, {
//                 method: 'PUT',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ food, time, calories })
//             })
//             .then(response => response.json())
//             .then(() => {
//                 loadMeals();
//                 mealForm.reset();
//                 toggleButtons('add');
//             })
//             .catch(error => console.error('Error:', error));
//         }
//     }

//     function deleteMeal() {
//         const selectedId = mealForm.getAttribute('data-id');
//         if (selectedId) {
//             fetch(`${baseUrl}/${selectedId}`, {
//                 method: 'DELETE'
//             })
//             .then(() => {
//                 loadMeals();
//                 mealForm.reset();
//                 toggleButtons('add');
//             })
//             .catch(error => console.error('Error:', error));
//         }
//     }

//     mealList.addEventListener('click', (e) => {
//         const target = e.target;
//         if (target.classList.contains('edit-btn')) {
//             const id = target.getAttribute('data-id');
//             fetch(`${baseUrl}/${id}`)
//                 .then(response => response.json())
//                 .then(data => {
//                     mealForm.querySelector('#food').value = data.food;
//                     mealForm.querySelector('#time').value = data.time;
//                     mealForm.querySelector('#calories').value = data.calories;
//                     mealForm.setAttribute('data-id', id);
//                     toggleButtons('edit');
//                 })
//                 .catch(error => console.error('Error:', error));
//         } else if (target.classList.contains('delete-btn')) {
//             const id = target.getAttribute('data-id');
//             fetch(`${baseUrl}/${id}`, {
//                 method: 'DELETE'
//             })
//             .then(() => {
//                 loadMeals();
//                 mealForm.reset();
//                 toggleButtons('add');
//             })
//             .catch(error => console.error('Error:', error));
//         }
//     });

//     function toggleButtons(mode) {
//         if (mode === 'add') {
//             addMealBtn.disabled = false;
//             editMealBtn.disabled = true;
//             mealForm.removeAttribute('data-id');
//         } else if (mode === 'edit') {
//             addMealBtn.disabled = true;
//             editMealBtn.disabled = false;
//         }
//     }
// });


let baseUrl = 'http://localhost:3030/jsonstore/tasks';

// extracting the elements
let loadMeatButton = document.getElementById('load-meals');
let addMealButton = document.getElementById('add-meal');
let editMealButton = document.getElementById('edit-meal');
let foodInput = document.getElementById('food');
let timeInput = document.getElementById('time');
let caloriesInput = document.getElementById('calories');
let divList = document.getElementById('list');
let currentMealId = ''; // IMPORTANT to be used for edit functionality


// 1. Load Meals
loadMeatButton.addEventListener('click', loadMealsFunction);
async function loadMealsFunction(){
    // clearing the divList to avoid duplicates
    divList.innerHTML = '';
    // fetching the data 
    let response = await fetch(baseUrl);
    let data = await response.json();
    let dataObjectValues = Object.values(data); // 0: Object { food: "Eggs", calories: "220", time: "08:30", … }

    // extracting the data from the object
    for (const element of dataObjectValues) {
        let currentFood = element.food;
        let currentTime = element.time;
        let currentCalories = element.calories;
        let currentId = element._id;

        // a. creating the elements
        let divMeal = document.createElement('div');
        divMeal.className = 'meal';
        let h2Food = document.createElement('h2');
        let h3Time = document.createElement('h3');
        let h3Calories = document.createElement('h3');
        let divMealButtons = document.createElement('div');
        divMealButtons.id = 'meal-buttons';
        let buttonChangeMeal = document.createElement('button');
        buttonChangeMeal.className = 'change-meal';
        buttonChangeMeal.textContent = 'Change';
        let buttonDeleteMeal = document.createElement('button');
        buttonDeleteMeal.className = 'delete-meal';
        buttonDeleteMeal.textContent = 'Delete';

        // b. appending children to their parents
        divMealButtons.appendChild(buttonChangeMeal);
        divMealButtons.appendChild(buttonDeleteMeal);
        divMeal.appendChild(h2Food);
        divMeal.appendChild(h3Time);
        divMeal.appendChild(h3Calories);
        divMeal.appendChild(divMealButtons);
        divList.appendChild(divMeal);

        // c. adding the fetched data to the elements
        h2Food.textContent = currentFood;
        h3Time.textContent = currentTime;
        h3Calories.textContent = currentCalories;

        // d. adding event listeners to the change button
        buttonChangeMeal.addEventListener('click', async () => {
            // filling the input fields with the values from the current meal
            document.getElementById('food').value = currentFood;
            document.getElementById('time').value = currentTime;
            document.getElementById('calories').value = currentCalories;

            // removing the current meal from the DOM
            divMeal.remove();
            // disabling the add meal button
            addMealButton.disabled = true;
            // enabling the edit meal button
            editMealButton.disabled = false;
            // saving the current meal id to be used for the PUT request
            currentMealId = currentId;
        });

        // e. adding event listeners to the delete button
        buttonDeleteMeal.addEventListener('click', () => {
            // delete the current meal from the DOM
            divMeal.remove();
            // sending the DELETE request to remove the element from the database
            fetch(`${baseUrl}/${currentId}`, {
                method: 'DELETE'
            })
            // reloading the meals again
            loadMealsFunction();
        })


    }
}

// 2. Add a Meal functionality
addMealButton.addEventListener('click', addMealFunction);
function addMealFunction() {
    let currentFood = foodInput.value;
    let currentTime = timeInput.value;
    let currentCalories = caloriesInput.value;

    // checking if the input fields are empty
    if (currentFood == '' || currentTime == '' || currentCalories == '') {
        return;
    }

    // creating object from the input values to be sent as POST
    let currentMealObject = {
        food: currentFood,
        time: currentTime,
        calories: currentCalories
    }

    // sending the POST request
    fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentMealObject)
    })
    .catch((err)=> {
        console.error(err);
    })

    // clearing the input fields
    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';

    // reloading the meals
    loadMealsFunction();
}

// 3. Edit a Meal functionality
editMealButton.addEventListener('click', async(e) => {
    e.preventDefault();
    // extracting the updated information
    let currentFood = document.getElementById('food').value;
    let currentTime = document.getElementById('time').value;
    let currentCalories = document.getElementById('calories').value;
    let currentId = currentMealId;

    // creating object from the updated input values to be sent as PUT
    let currentMealObject = {
        food: currentFood,
        time: currentTime,
        calories: currentCalories,
        _id: currentId
    }

    // sending the PUT request
    await fetch(`${baseUrl}/${currentId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentMealObject)
    })

    // clearing the input fields
    document.getElementById('food').value = '';
    document.getElementById('time').value = '';
    document.getElementById('calories').value = '';

    // fetching the updated meals
    loadMealsFunction();

    // disabling the edit meal button and enabling the add meal button
    editMealButton.disabled = true;
    addMealButton.disabled = false;
});