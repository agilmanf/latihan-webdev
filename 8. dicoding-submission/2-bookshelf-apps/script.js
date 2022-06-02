const books = JSON.parse(localStorage.getItem("mybooks")) || [];

// Modal System //
const showButton = document.querySelector(".show-modal-button");
const closeButton = document.querySelector(".close-modal-button");
const modal = document.querySelector(".modal-container");

function toggleModal() {
  modal.classList.toggle("active");
}

showButton.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
////////////////////

// Submit New Book //
const judulInput = document.querySelector("#judul");
const penulisInput = document.querySelector("#penulis");
const tahunInput = document.querySelector("#tahun");
const selesaiInput = document.querySelector("#selesai");
const bookForm = document.querySelector(".new-book-form");

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

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
  bookForm.reset();
});
////////////////////

function checkDuplicate(title) {
  return books.find((book) => book.title == title);
}
