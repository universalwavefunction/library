let myLibrary = [];

function Book(title, author, pages, read, position) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.position = position
}

book_display = document.getElementById("books")

function bookDisplay() {

}
function addBook() {
  const newBook = new Book(document.getElementById("title").value,
   document.getElementById("author").value, document.getElementById("pages").value,
   document.getElementById("read").checked, myLibrary.length);
  myLibrary.push(newBook);
  book_display.innerHTML += "<ul>" + "<h2>" + "Title: " + newBook.title + "</h2>"
  + "<li>" + "Author: " + newBook.author + "</li>" + "<li>" + "Pages: " +
  newBook.pages + "</li>" + "<li>" + "Read: " + newBook.read + "</li>" +
  "<button id='exit' onclick=removeBook()>" + 'x' + "</button>" + "</ul>"
  console.log(newBook.read)
  }


function removeBook() {
  var exit = document.querySelectorAll("#exit")
  exit.forEach((button, i) => {
    button.addEventListener("click", () => {
      myLibrary.splice(i, 1)
      book_display.innerHTML = ""
      for (i in myLibrary) {
        book_display.innerHTML += "<ul>" + "<h2>" + "Title: " + myLibrary[i].title + "</h2>"
        + "<li>" + "Author: " + myLibrary[i].author + "</li>" + "<li>" + "Pages: " +
        myLibrary[i].pages + "</li>" + "<li>" + "Read: " + myLibrary[i].read + "</li>" +
        "<button id='exit' onclick=removeBook()>" + 'x' + "</button>" + "</ul>"
        console.log(myLibrary)
      }
    })
  })
}

//To Solve:
//make book cards the same size, make read checkbox start at left edge,
//make read toggle switch, make delete work on single click,
//make log in button align properly
