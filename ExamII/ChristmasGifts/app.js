 window.addEventListener("load", solve);

 function solve(){
    
        const loadPresentsBtn = document.getElementById('load-presents');
        const addPresentBtn = document.getElementById('add-present');
        const editPresentBtn = document.getElementById('edit-present');
        const giftList = document.getElementById('gift-list');
        const giftForm = document.querySelector('form');
      
        loadPresentsBtn.addEventListener('click', loadPresents);
        addPresentBtn.addEventListener('click', addGift);
        editPresentBtn.addEventListener('click', editGift);
      
        function loadPresents() {
          fetch('http://localhost:3030/jsonstore/gifts/')
            .then(response => response.json())
            .then(data => {
              giftList.innerHTML = '';
              Object.entries(data).forEach(([id, gift]) => {
                const giftItem = createGiftItem(id, gift);
                giftList.appendChild(giftItem);
              });
            })
            .catch(error => console.error('Error loading presents:', error));
        }
      
        function addGift() {
          const gift = document.getElementById('gift').value;
          const forValue = document.getElementById('for').value;
          const price = document.getElementById('price').value;
      
          if (!gift || !forValue || !price) {
            return;
          }
      
          const giftData = { gift, for: forValue, price };
          
          fetch('http://localhost:3030/jsonstore/gifts/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(giftData),
          })
          .then(response => response.json())
          .then(() => {
            clearFormFields();
            loadPresents();
          })
          .catch(error => console.error('Error adding gift:', error));
        }
      
        function editGift() {
          // Implement edit functionality here
        }
      
        function deleteGift(id) {
          fetch(`http://localhost:3030/jsonstore/gifts/${id}`, {
            method: 'DELETE',
          })
          .then(() => loadPresents())
          .catch(error => console.error('Error deleting gift:', error));
        }
      
        function createGiftItem(id, gift) {
          const giftItem = document.createElement('div');
          giftItem.classList.add('gift-stock');
      
          const contentDiv = document.createElement('div');
          contentDiv.classList.add('content');
          contentDiv.innerHTML = `
            <p>${gift.gift}</p>
            <p>${gift.for}</p>
            <p>${gift.price}</p>
          `;
      
          const buttonsContainer = document.createElement('div');
          buttonsContainer.classList.add('buttons-container');
      
          const changeBtn = document.createElement('button');
          changeBtn.classList.add('change-btn');
          changeBtn.textContent = 'Change';
          changeBtn.addEventListener('click', () => editGiftForm(id, gift));
      
          const deleteBtn = document.createElement('button');
          deleteBtn.classList.add('delete-btn');
          deleteBtn.textContent = 'Delete';
          deleteBtn.addEventListener('click', () => deleteGift(id));
      
          buttonsContainer.appendChild(changeBtn);
          buttonsContainer.appendChild(deleteBtn);
      
          giftItem.appendChild(contentDiv);
          giftItem.appendChild(buttonsContainer);
      
          return giftItem;
        }
      
        function editGiftForm(id, gift) {
          // Implement edit form population logic here
        }
      
        function clearFormFields() {
          document.getElementById('gift').value = '';
          document.getElementById('for').value = '';
          document.getElementById('price').value = '';
        }
      
      
    // const baseUrl = 'http://localhost:3030/jsonstore/gifts/';
    // const loadPresentsBtn = document.getElementById('load-presents');
    // const giftList = document.getElementById('gift-list');
    // const addPresentBtn = document.getElementById('add-present');
    // const editPresentBtn = document.getElementById('edit-present');
    // const giftInput = document.getElementById('gift');
    // const forInput = document.getElementById('for');
    // const priceInput = document.getElementById('price');
  
    // loadPresentsBtn.addEventListener('click', loadPresents);
    // addPresentBtn.addEventListener('click', addPresent);
    // editPresentBtn.addEventListener('click', editPresent);
  
    // async function loadPresents() {
    //   const response = await fetch(baseUrl);
    //   const data = await response.json();
  
    //   giftList.innerHTML = '';
  
    //   Object.entries(data).forEach(([id, { gift, for: forValue, price }]) => {
    //     const presentElement = createPresentElement(id, gift, forValue, price);
    //     giftList.appendChild(presentElement);
    //   });
  
    //   disableEditPresentBtn();
    // }
  
    // async function addPresent() {
    //   const gift = giftInput.value.trim();
    //   const forValue = forInput.value.trim();
    //   const price = priceInput.value.trim();
  
    //   if (!gift || !forValue || !price) {
    //     return;
    //   }
  
    //   const response = await fetch(baseUrl, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ gift, for: forValue, price }),
    //   });
  
    //   if (response.ok) {
    //     loadPresents();
    //     clearInputFields();
    //   }
    // }
  
    // function clearInputFields() {
    //   giftInput.value = '';
    //   forInput.value = '';
    //   priceInput.value = '';
    // }
  
    // function createPresentElement(id, gift, forValue, price) {
    //   const presentElement = document.createElement('div');
    //   presentElement.classList.add('gift-stock');
  
    //   const contentDiv = document.createElement('div');
    //   contentDiv.classList.add('content');
    //   contentDiv.innerHTML = `
    //       <p>${gift}</p>
    //       <p>${forValue}</p>
    //       <p>${price}</p>
    //   `;
  
    //   const buttonsContainerDiv = document.createElement('div');
    //   buttonsContainerDiv.classList.add('buttons-container');
  
    //   const changeBtn = document.createElement('button');
    //   changeBtn.classList.add('change-btn');
    //   changeBtn.textContent = 'Change';
    //   changeBtn.addEventListener('click', () => prepareForEdit(id, gift, forValue, price));
  
    //   const deleteBtn = document.createElement('button');
    //   deleteBtn.classList.add('delete-btn');
    //   deleteBtn.textContent = 'Delete';
    //   deleteBtn.addEventListener('click', () => deletePresent(id));
  
    //   buttonsContainerDiv.appendChild(changeBtn);
    //   buttonsContainerDiv.appendChild(deleteBtn);
  
    //   presentElement.appendChild(contentDiv);
    //   presentElement.appendChild(buttonsContainerDiv);
  
    //   return presentElement;
    // }
  
    // async function editPresent() {
    //   const id = editPresentBtn.getAttribute('data-id');
    //   const gift = giftInput.value.trim();
    //   const forValue = forInput.value.trim();
    //   const price = priceInput.value.trim();
  
    //   if (!gift || !forValue || !price || !id) {
    //     return;
    //   }
  
    //   const response = await fetch(`${baseUrl}${id}`, {
    //     method: 'PUT',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ gift, for: forValue, price }),
    //   });
  
    //   if (response.ok) {
    //     loadPresents();
    //     clearInputFields();
    //     disableEditPresentBtn();
    //   }
    // }
  
    // async function deletePresent(id) {
    //   const response = await fetch(`${baseUrl}${id}`, {
    //     method: 'DELETE',
    //   });
  
    //   if (response.ok) {
    //     loadPresents();
    //     clearInputFields();
    //     disableEditPresentBtn();
    //   }
    // }
  
    // function prepareForEdit(id, gift, forValue, price) {
    //   editPresentBtn.setAttribute('data-id', id);
    //   giftInput.value = gift;
    //   forInput.value = forValue;
    //   priceInput.value = price;
    //   editPresentBtn.disabled = false;
    //   addPresentBtn.disabled = true;
    // }
  
    // function disableEditPresentBtn() {
    //   editPresentBtn.disabled = true;
    //   addPresentBtn.disabled = false;
    //   editPresentBtn.removeAttribute('data-id');
    // }
  }
  




// async function solve() {
//   const baseUrl = "http://localhost:3030/jsonstore/gifts";
//   const giftList = document.getElementById("gift-list");
//   const giftInput = document.getElementById("gift");
//   const forInput = document.getElementById("for");
//   const priceInput = document.getElementById("price");
//   const addGiftBtn = document.getElementById("add-present");
//   const editGiftBtn = document.getElementById("edit-present");

//   addGiftBtn.addEventListener("click", addGift);
//   editGiftBtn.addEventListener("click", editGift);

//   loadPresents();

//   async function loadPresents() {
//     giftList.innerHTML = "";
//     const response = await fetch(baseUrl);
//     const data = await response.json();

//     Object.values(data).forEach(([id, gift]) => {
//       const giftElement = createGiftElement(id, gift);
//       giftList.appendChild(giftElement);
//     });
//   }

//   async function addGift() {
//     const gift = giftInput.value.trim();
//     const forValue = forInput.value.trim();
//     const price = priceInput.value.trim();

//     if (!gift || !forValue || !price) {
//       return;
//     }

//     const response = await fetch(baseUrl, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ gift, for: forValue, price }),
//     });

//     if (response.ok) {
//       loadPresents();
//       // Clear input fields
//       giftInput.value = "";
//       forInput.value = "";
//       priceInput.value = "";
//     }
//   }

//   async function editGift() {
//     const id = editGiftBtn.getAttribute("data-id");
//     const gift = giftInput.value.trim();
//     const forValue = forInput.value.trim();
//     const price = priceInput.value.trim();

//     if (!gift || !forValue || !price || !id) {
//       return;
//     }

//     const response = await fetch(`${baseUrl}/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ gift, for: forValue, price }),
//     });

//     //  if (response.ok) {
//     loadPresents();
//     // Clear input fields
//     giftInput.value = "";
//     forInput.value = "";
//     priceInput.value = "";
//     // Activate Add Gift button
//     addGiftBtn.disabled = false;
//     // Deactivate Edit Gift button
//     editGiftBtn.disabled = true;
//     // Clear data-id attribute
//     editGiftBtn.removeAttribute("data-id");
//     //}
//   }

//   function createGiftElement(id, { gift, for: forValue, price }) {
//     let giftElement = document.createElement("div");
//     giftElement.classList.add("gift-stock");

//     let contentDiv = document.createElement("div");
//     contentDiv.classList.add("content");
    

// //     let gift = document.createElement("p");
// //     gift.textContent = gift;

// //     let forValue = document.createElement("p");
// //     forValue.textContent = forValue;
// //     let price = document.createElement("p");
// //     price.textContent = price;
// //  contentDiv.appendChild(gift);
// //     contentDiv.appendChild(forValue);
// //     contentDiv.appendChild(price);
   
//     contentDiv.innerHTML = `
//             <p>${gift}</p>
//             <p>${forValue}</p>
//             <p>${price}</p>
//         `;

//     const buttonsContainerDiv = document.createElement("div");
//     buttonsContainerDiv.classList.add("buttons-container");

//     const changeBtn = document.createElement("button");
//     changeBtn.classList.add("change-btn");
//     changeBtn.textContent = "Change";
//     changeBtn.addEventListener("click", () =>
//       prepareForEdit(id, gift, forValue, price)
//     );

//     const deleteBtn = document.createElement("button");
//     deleteBtn.classList.add("delete-btn");
//     deleteBtn.textContent = "Delete";
//     deleteBtn.addEventListener("click", () => deleteGift(id));

//     buttonsContainerDiv.appendChild(changeBtn);
//     buttonsContainerDiv.appendChild(deleteBtn);

//     giftElement.appendChild(contentDiv);
//     giftElement.appendChild(buttonsContainerDiv);

//     return giftElement;
//   }
//   function deleteGift(id) {
//     fetch(`${baseUrl}/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => response.json())
//       .then(() => loadPresents())
//       .catch((error) => console.error(error));
//   }

//   // async function deleteGift(id) {
//   //     const response = await fetch(`${baseUrl}/${id}`, {
//   //         method: 'DELETE',
//   //     });

//   //     if (response.ok) {
//   //        await loadPresents();
//   //     }
//   // }

//   function prepareForEdit(id, gift, forValue, price) {
//     // Set data-id attribute to store the ID for later use
//     editGiftBtn.setAttribute("data-id", id);
//     // Set input fields with current data
//     giftInput.value = gift;
//     forInput.value = forValue;
//     priceInput.value = price;
//     // Activate Edit Gift button
//     editGiftBtn.disabled = false;
//     // Deactivate Add Gift button
//     addGiftBtn.disabled = true;
//   }
// }
