const Author = require("../models/author");

const getAuthorById = id => {
  return Author.findById(id);
};

const getAuthorByName = ({ name }) => {
  return Author.findOne({ name });
};

const getAuthors = () => {
  return Author.find({});
};

const saveAuthor = ({ name, age }) => {
  return new Author({ name, age }).save();
};

const updateAuthor = ({ id, name, age }) => {
  return Author.findByIdAndUpdate(id, { name, age });
};

const deleteAuthor = ({ id }) => {
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
