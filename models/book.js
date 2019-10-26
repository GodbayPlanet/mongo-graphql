const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = Schema({
  name: String,
  genre: String,
  isbn: String,
  year: Number,
  authorId: String
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
