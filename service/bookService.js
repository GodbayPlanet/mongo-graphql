const Book = require("../models/book");

const getBooksByAuthorId = id => {
  return Book.find({ authorId: id });
};

const getBookByName = ({ name }) => {
  return Book.findOne({ name });
};

const getBooks = () => {
  return Book.find({});
};

const saveBook = ({ name, genre, isbn, year, authorId }) => {
  return new Book({
    name,
    genre,
    isbn,
    year,
    authorId
  }).save();
};

const updateBook = ({ id, name, genre, isbn, year, authorId }) => {
  return Book.findByIdAndUpdate(id, {
    name,
    genre,
    isbn,
    year,
    authorId
  });
};

const deleteBook = ({ id }) => {
  return Book.findByIdAndRemove(id);
};

module.exports = {
  getBooksByAuthorId,
  getBookByName,
  getBooks,
  saveBook,
  updateBook,
  deleteBook
};
