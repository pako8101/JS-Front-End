function attachEvents() {
  const booksList = document.getElementById("booksList");
  const authorInput = document.getElementById("author");
  const titleInput = document.getElementById("title");
  let selectedBookId = null;

  function loadBooks() {
      fetch("http://localhost:3030/jsonstore/collections/books")
          .then(response => response.json())
          .then(data => {
              displayBooks(data);
          })
          .catch(error => console.error("Error loading books:", error));
  }

  function displayBooks(books) {
      booksList.innerHTML = "";

      books.forEach(book => {
          const listItem = document.createElement("li");
          listItem.textContent = `${book.author} - ${book.title}`;

          const editButton = document.createElement("button");
          editButton.textContent = "Edit";
          editButton.addEventListener("click", () => editBook(book._id, book.author, book.title));

          const deleteButton = document.createElement("button");
          deleteButton.textContent = "Delete";
          deleteButton.addEventListener("click", () => deleteBook(book._id));

          listItem.appendChild(editButton);
          listItem.appendChild(deleteButton);

          booksList.appendChild(listItem);
      });
  }

  function editBook(id, author, title) {
      selectedBookId = id;
      authorInput.value = author;
      titleInput.value = title;
  }

  function createOrUpdateBook() {
      const author = authorInput.value;
      const title = titleInput.value;

      if (!author || !title) {
          console.log("Please fill in both author and title.");
          return;
      }

      const url = selectedBookId
          ? `http://localhost:3030/jsonstore/collections/books/${selectedBookId}`
          : "http://localhost:3030/jsonstore/collections/books";

      const method = selectedBookId ? "PUT" : "POST";

      fetch(url, {
          method,
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ author, title })
      })
          .then(response => response.json())
          .then(() => {
              loadBooks();
              clearForm();
          })
          .catch(error => console.error("Error creating/updating book:", error));
  }

  function deleteBook(id) {
      fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
          method: "DELETE"
      })
          .then(response => response.json())
          .then(() => {
              loadBooks();
              clearForm();
          })
          .catch(error => console.error("Error deleting book:", error));
  }

  function clearForm() {
      selectedBookId = null;
      authorInput.value = "";
      titleInput.value = "";
}
}
attachEvents();