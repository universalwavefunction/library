let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
}

book_display = document.getElementById("books")

function addBook() {
  const newBook = new Book(document.getElementById("title").value,
   document.getElementById("author").value, document.getElementById("pages").value,
   document.getElementById("read").value);
  myLibrary.push(newBook);
  console.log(myLibrary)
  book_display.innerHTML += "<ul>" + "<h2>" + "Title: " + newBook.title + "</h2>"
  + "<li>" + "Author: " + newBook.author + "</li>" + "<li>" + "Pages: " +
  newBook.pages + "</li>" + "<li>" + "Read: " + newBook.read + "</li>" + "</ul>"
  console.log(newBook)
  }
