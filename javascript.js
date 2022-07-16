let myLibrary = [];

function Book(title, author, pages, read, position) {
  this.title = title
  this.author = author
  this.pages = pages
  this.read = read
  this.position = position
}

book_display = document.querySelector("#books")

function bookDisplay() {

}
function addBook() {
  const newBook = new Book(document.getElementById("title").value,
   document.getElementById("author").value, document.getElementById("pages").value,
   document.getElementById("read").checked, myLibrary.length);
  myLibrary.push(newBook);
  if (newBook.read == true) {
    book_display.innerHTML += "<ul>" + "<h2>" + "Title: " + newBook.title + "</h2>"
    + "<li>" + "Author: " + newBook.author + "</li>" + "<li>" + "Pages: " +
    newBook.pages + "</li>" + "<li>" + "Read: " + newBook.read + "</li>" +
    "<button id='exit'>" + 'x' + "</button>" + "Read: " +
    "<input type='checkbox' value='yes' id='toggle' checked>" + "</ul>"
  }
  else {
      book_display.innerHTML += "<ul>" + "<h2>" + "Title: " + newBook.title + "</h2>"
      + "<li>" + "Author: " + newBook.author + "</li>" + "<li>" + "Pages: " +
      newBook.pages + "</li>" + "<li>" + "Read: " + newBook.read + "</li>" +
      "<button id='exit'>" + 'x' + "</button>" + "Read: " +
      "<input type='checkbox' value='yes' id='toggle'>" + "</ul>"
  }
  removeBook()
  toggleRead()
  }

function toggleRead() {
  var toggle = document.querySelectorAll('#toggle')
  toggle.forEach((button, i) => {
    button.addEventListener("click", () => {
      if (myLibrary[i].read == button.checked) {
      myLibrary[i].read = !button.checked
    }
      else if (myLibrary[i].read != button.checked) {
      myLibrary[i].read = button.checked
    }
      book_display.innerHTML = ""
      for (i in myLibrary) {
        if (myLibrary[i].read == true) {
          book_display.innerHTML += "<ul>" + "<h2>" + "Title: " + myLibrary[i].title + "</h2>"
          + "<li>" + "Author: " + myLibrary[i].author + "</li>" + "<li>" + "Pages: " +
          myLibrary[i].pages + "</li>" + "<li>" + "Read: " + myLibrary[i].read + "</li>" +
          "<button id='exit'>" + 'x' + "</button>" + "Read: " +
          "<input type='checkbox' value='yes' id='toggle' checked>" + "</ul>"
          toggleRead()
          removeBook()
        }
        else {
          book_display.innerHTML += "<ul>" + "<h2>" + "Title: " + myLibrary[i].title + "</h2>"
          + "<li>" + "Author: " + myLibrary[i].author + "</li>" + "<li>" + "Pages: " +
          myLibrary[i].pages + "</li>" + "<li>" + "Read: " + myLibrary[i].read + "</li>" +
          "<button id='exit'>" + 'x' + "</button>" + "Read: " +
          "<input type='checkbox' value='yes' id='toggle'>" + "</ul>"
          toggleRead()
          removeBook()
        }
      }
    })
  })
}

function removeBook() {
  var exit = document.querySelectorAll("#exit")
  exit.forEach((button, i) => {
    button.addEventListener("click", () => {
      myLibrary.splice(i, 1)
      book_display.innerHTML = ""
      for (i in myLibrary) {
        if (myLibrary[i].read == true) {
          book_display.innerHTML += "<ul>" + "<h2>" + "Title: " + myLibrary[i].title + "</h2>"
          + "<li>" + "Author: " + myLibrary[i].author + "</li>" + "<li>" + "Pages: " +
          myLibrary[i].pages + "</li>" + "<li>" + "Read: " + myLibrary[i].read + "</li>" +
          "<button id='exit'>" + 'x' + "</button>" + "Read: " +
          "<input type='checkbox' value='yes' id='toggle' checked>" + "</ul>"
          toggleRead()
          removeBook()
        }
        else {
          book_display.innerHTML += "<ul>" + "<h2>" + "Title: " + myLibrary[i].title + "</h2>"
          + "<li>" + "Author: " + myLibrary[i].author + "</li>" + "<li>" + "Pages: " +
          myLibrary[i].pages + "</li>" + "<li>" + "Read: " + myLibrary[i].read + "</li>" +
          "<button id='exit'>" + 'x' + "</button>" + "Read: " +
          "<input type='checkbox' value='yes' id='toggle'>" + "</ul>"
          toggleRead()
          removeBook()
        }
      }
    })
  })
}

//To Solve:
//make book cards the same size (change from list items to divs?), make read checkbox start at left edge,
//make first letters auto caps
