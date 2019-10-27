const Book = require("./models/book");
const Author = require("./models/author");

const author = new Author({
  name: "Kyle Simpson",
  age: 44
});

const book = new Book({
  name: "You Dont know JS",
  genre: "Programming",
  isbn: "12343234354566332",
  year: 2015,
  authorId: "5db4d553198df2526728597a"
});

async function addAuthor() {
  return author
    .save()
    .then(authorData => authorData)
    .catch(err => console.log("An error occured", err));
}

async function addBook() {
  return book
    .save()
    .then(bookData => bookData)
    .catch(err => console.log("An error occured", err));
}

function listAllAuthors() {
  Author.find()
    .exec()
    .then(authors => console.log("Authors", authors))
    .catch(err => console.log(err));
}

function listAllBooks() {
  Book.find()
    .exec()
    .then(books => console.log("Books", books))
    .catch(err => console.log(err));
}

async function addDataToDB() {
  await addAuthor();
  listAllAuthors();
  await addBook();
  listAllBooks();
}

module.exports = addDataToDB;
