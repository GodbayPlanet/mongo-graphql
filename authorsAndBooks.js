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

function addAuthor() {
  author
    .save()
    .then(authorData =>
      console.log("Successfully added new author", authorData)
    )
    .catch(err => console.log("An error occured", err));
}

function addBook() {
  book
    .save()
    .then(bookData => console.log("Successfully added new book", bookData))
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

module.exports = {
  addAuthor,
  addBook,
  listAllAuthors,
  listAllBooks
};
