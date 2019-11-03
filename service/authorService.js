const Author = require("../models/author");

const getAuthorById = author_id => {
  return Author.findById(author_id);
};

const getAuthorByName = author_name => {
  return Author.findOne({ name: author_name });
};

const getAuthors = () => {
  return Author.find({});
};

const saveAuthor = ({ name, age }) => {
  return new Author({ name: name, age: age }).save();
};

const updateAuthor = ({ id, name, age }) => {
  return Author.findByIdAndUpdate(id, { name: name, age: age });
};

const deleteAuthor = id => {
  return Author.findByIdAndRemove(id);
};

module.exports = {
  getAuthorById,
  getAuthorByName,
  getAuthors,
  saveAuthor,
  updateAuthor,
  deleteAuthor
};
