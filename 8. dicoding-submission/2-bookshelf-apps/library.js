let books = JSON.parse(localStorage.getItem("mybooks")) || [];

// Calculate Total Books //
const numberTotal = document.querySelector(".number-total");
const numberCompleted = document.querySelector(".number-completed");
const numberIncomplete = document.querySelector(".number-incomplete");

function calculateTotalBooks() {
  const total = books.length;

  const completed = books.reduce((total, book) => {
    if (!book.isComplete) return total;
    return total + 1;
  }, 0);

  const incomplete = total - completed;

  numberTotal.textContent = total;
  numberCompleted.textContent = completed;
  numberIncomplete.textContent = incomplete;
}

calculateTotalBooks();
/////////////////////////////////

// Get Books //

function getAllBooks() {
  return JSON.parse(localStorage.getItem("mybooks"));
}

function getCompletedBooks() {
  books = getAllBooks();
  return books.filter((book) => book.isComplete);
}

function getIncompleteBooks() {
  books = getAllBooks();
  return books.filter((book) => book.isComplete == false);
}

/////////////////////////////////////

// Handle Card Click //
const cards = document.querySelectorAll(".total");
const judul = document.querySelector(".judul");

function resetCardActive() {
  cards.forEach((card) => card.classList.remove("active"));
}

cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    resetCardActive();
    card.classList.add("active");

    switch (card.id) {
      case "card-incomplete": {
        books = getIncompleteBooks();
        judul.textContent = "Buku Yang Belum Dibaca";
        break;
      }
      case "card-completed": {
        books = getCompletedBooks();
        judul.textContent = "Buku Yang Sudah Dibaca";
        break;
      }
      case "card-total": {
        books = getAllBooks();
        judul.textContent = "Semua Buku";
        break;
      }
    }

    printDatas();
  });
});

////////////////////////////////////////////

// Print Datas ////////////////////////////
const table = document.querySelector(".body-table");

function printDatas() {
  table.innerHTML = "";

  books.forEach((book, index) => {
    table.innerHTML += dataTemplate(book, index + 1);
  });
}

function dataTemplate(book, index) {
  const status = book.isComplete
    ? '<h5 class="status-completed">Sudah Dibaca</h5>'
    : '<h5 class="status-incomplete">Belum Dibaca</h5>';

  return `<tr>
    <td class="col-number">${index}</td>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.year}</td>
    <td>${status}</td>
    <td class="col-action">
      <button class="edit-button">Edit</button>
      <button class="delete-button">Delete</button>
    </td>
  </tr>`;
}

printDatas();
