let myLibrary = [];

function Book(title, author, read) {
  this.title = title
  this.author = author
  this.read = read
}

function addBookToLibrary(title, author, read) {
  myLibrary.push(new Book(title,author, read))
}

const container = document.getElementById("container");

function updatePage() {
  clearLibrary(container);
  myLibrary.forEach(book => {
    for (let key in book) {
        let temp = document.createElement("p");
        temp.innerText=`${book[key]}`;
        container.appendChild(temp);
        key == "title" ? temp.className = "title" :         key == "author" ? temp.className = "author" : temp.className = "read";
        temp.setAttribute('data-bookNumber',  myLibrary.indexOf(book));
        if (key == "read") { 
        let readButton = document.createElement("button");
        container.appendChild(readButton);
        readButton.className = "read-button";  
        readButton.textContent = "Change 'read' status";
        readButton.setAttribute('data-read',  book["read"]);
          //console.log(readButton.getAttribute('data-read'));
          readButton.setAttribute('data-bookNumber',  myLibrary.indexOf(book));
          let deleteButton = document.createElement("button");
        container.appendChild(deleteButton);
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete Book";
        deleteButton.setAttribute('data-bookNumber', myLibrary.indexOf(book));
        }
    }
});
document.querySelectorAll(".delete-button").forEach(item => {
    item.addEventListener('click', () => deleteBook(item.getAttribute('data-bookNumber')));

});
  
 document.querySelectorAll(".read-button").forEach(item => {
    item.addEventListener('click', () => updateReadStatus(item.getAttribute('data-read'),item.getAttribute('data-bookNumber')));

});
  
  
};

function deleteBook(bookToDelete) {
    myLibrary.splice(bookToDelete, 1);
    updatePage();
};

document.getElementById("add-book").addEventListener('click', () => {addBookToLibrary(prompt("Enter Title"),prompt("Enter Author"),prompt("Enter whether book has been read"));
    updatePage();                                                     }
);

function clearLibrary(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateReadStatus(yesOrNo, bookNumber) {
  //console.log(yesOrNo);
  myLibrary[bookNumber].read == "yes" ? myLibrary[bookNumber].read = "no" : myLibrary[bookNumber].read = "yes";
  updatePage();
};

