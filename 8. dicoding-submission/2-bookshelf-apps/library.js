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
    _books = books;
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
      <button class="edit-button" onclick="toggleModal(${book.id})">Edit</button>
      <button class="delete-button" onclick="deleteData(${book.id})">Delete</button>
    </td>
  </tr>`;
}

printDatas();

// Edit Data //

function addData() {
  this.event.preventDefault();
  books = getAllBooks();

  const judulInput = document.querySelector("#judul");
  const penulisInput = document.querySelector("#penulis");
  const tahunInput = document.querySelector("#tahun");
  const selesaiInput = document.querySelector("#selesai");

  const newBook = {
    id: Date.now(),
    title: judulInput.value,
    author: penulisInput.value,
    year: tahunInput.value,
    isComplete: selesaiInput.checked,
  };

  if (checkDuplicate(judulInput.value)) {
    return alert("Buku ini sudah ada di Library-mu, masukan judul yang lain!");
  }

  books.push(newBook);
  localStorage.setItem("mybooks", JSON.stringify(books));

  alert("Buku berhasil ditambahkan");
  updateUI();
  toggleModal();
}

function editData(id) {
  this.event.preventDefault();
  books = getAllBooks();

  const judulInput = document.querySelector("#judul");
  const penulisInput = document.querySelector("#penulis");
  const tahunInput = document.querySelector("#tahun");
  const selesaiInput = document.querySelector("#selesai");

  const newBooks = books.map((book) => {
    if (book.id === id) {
      return {
        ...book,
        title: judulInput.value,
        author: penulisInput.value,
        year: tahunInput.value,
        isComplete: selesaiInput.checked,
      };
    }
    return book;
  });

  books = newBooks;
  localStorage.setItem("mybooks", JSON.stringify(books));

  updateUI();
  toggleModal();
}

function deleteData(id) {
  books = getAllBooks();
  const newBooks = books.filter((book) => book.id !== id);
  const confirmed = confirm("Apakah kamu yang yakin mau hapus buku ini?");

  if (confirmed) {
    books = newBooks;
    localStorage.setItem("mybooks", JSON.stringify(books));
    updateUI();
  }
}

function checkDuplicate(title) {
  return books.find((book) => book.title == title);
}

function updateUI() {
  calculateTotalBooks();

  // check active card //
  cards.forEach((card) => {
    if (card.classList.contains("active")) {
      switch (card.id) {
        case "card-incomplete": {
          books = getIncompleteBooks();
          break;
        }
        case "card-completed": {
          books = getCompletedBooks();
          break;
        }
        case "card-total": {
          books = getAllBooks();
          break;
        }
      }
    }
  });

  printDatas();
}

// Modal System //
const modal = document.querySelector(".modal-container");

function toggleModal(id) {
  modal.innerHTML = modalTemplate(id);
  modal.classList.toggle("active");
}

function modalTemplate(id) {
  const book = books.find((book) => book.id === id);
  const header = book ? "Edit Data Buku" : "Tambah Buku Baru";

  const judul = book?.title || "";
  const penulis = book?.author || "";
  const tahun = book?.year || "";
  const selesai = book?.isComplete ? "checked" : "";

  const formSubmit = book ? `editData(${book.id})` : `addData()`;

  return `
  <div class="modal-backdrop">
        <div class="modal">
          <button class="close-modal-button" onclick="toggleModal()">&#x2716;</button>
          <h5>${header}</h5>
          <span>Isi data buku untuk dimasukan ke library mu!</span>
          <form onsubmit="${formSubmit}">
            <label for="judul">
              <span>Judul Buku</span>
              <input id="judul" type="text" value="${judul}" required autocomplete="off" />
            </label>
            <label for="penulis">
              <span>Penulis</span>
              <input id="penulis" type="text" value="${penulis}" required autocomplete="off" />
            </label>
            <label for="tahun">
              <span>Tahun</span>
              <input id="tahun" type="number" value="${tahun}" required autocomplete="off" />
            </label>
            <label for="selesai" class="checkbox">
              <span>Selesai Dibaca?</span>
              <input id="selesai" type="checkbox" ${selesai} />
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>`;
}
////////////////////

// Search //
const searchForm = document.querySelector(".search-form");
const searchInput = document.querySelector(".search-input");
let _books = books;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const keyword = searchInput.value;

  const regex = new RegExp(`^.*${keyword}.*$`, "ig");
  const filteredBooks = _books.filter((book) => {
    if (book.title.match(regex) !== null) {
      return book;
    }
  });

  books = filteredBooks;
  printDatas();
});
