let myLibrary = [];
let bookInfo = [];
book_display = document.querySelector("#books");

const library = () => {
  const book = (title, author, pages, read, position, checked, display) => {
    return {title,author,pages,read,position,checked, display}
  }

  const addBook = () => {
    const newBook = book(document.getElementById("title").value,
    document.getElementById("author").value, document.getElementById("pages").value,
    document.getElementById("read").checked, myLibrary.length);

    if (newBook.read == true) {
      newBook.checked = "checked"
    }

    newBook.display = "<div class='book-container'>" + "<h2>" + newBook.title + "</h2>"
    + "<p>" + "Author: " + newBook.author + "</p>" + "<p>" + "Pages: " +
    newBook.pages + "</p>" + "<p>" + "Read: " + "<input type='checkbox' value='yes' id='toggle'" + newBook.checked + ">"
    + "</p>" + "<button id='exit'>" + 'x' + "</button>" + "</div>"

    myLibrary.push(newBook);
    bookInfo.push(newBook.display);

    bookDisplay();
    toggleRead();
    }

  const bookDisplay = () => {
    book_display.innerHTML = "";
    for (i in bookInfo) {
      book_display.innerHTML += bookInfo[i]
    }
    removeBook()
  }

  const toggleRead = () => {
    var toggle = document.querySelectorAll('#toggle')
    toggle.forEach((button, i) => {
      button.addEventListener("click", () => {
        if (myLibrary[i].read != button.checked) {
          myLibrary[i].read = button.checked
      }})
      })}

  const removeBook = () => {
    var exit = document.querySelectorAll("#exit")
    exit.forEach((x, i) => {
      x.addEventListener("click", () => {
        bookInfo.splice(i, 1)
        bookDisplay()
      })
    })}
return {library, addBook, book, removeBook, toggleRead, bookDisplay}
}

/*To Solve:
make read checkbox start at left edge,
make first letters auto caps, form character limit, require forms to be filled
*/
