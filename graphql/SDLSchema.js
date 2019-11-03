const { makeExecutableSchema } = require("graphql-tools");
const {
  getAuthorByName,
  getAuthors,
  saveAuthor,
  updateAuthor,
  deleteAuthor
} = require("../service/authorService");
const { getBookByName, getBooks } = require("../service/bookService");

const schema = `
  type Author {
    id: String!
    name: String!
    age: Int
    books: [Book]
  }

  type Book {
    id: String!
    name: String!
    genre: String
    isbn: String!
    year: Int
    author: Author!
  }

  type Query {
    author(name: String!): Author
    authors: [Author]
    book(name: String!): Book
    books: [Book]
  }

  type Mutation {
    addAuthor(name: String!, age: Int): Author
    updateAuthor(id: String!, name: String, age: Int): Author
    deleteAuthor(id: String!): Author
  }
`;

const sdlSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: {
    Query: {
      author: (_, args) => getAuthorByName(args),
      authors: () => getAuthors(),
      book: (_, args) => getBookByName(args),
      books: () => getBooks()
    },
    Mutation: {
      addAuthor: (_, args) => saveAuthor(args),
      updateAuthor: (_, args) => updateAuthor(args),
      deleteAuthor: (_, args) => deleteAuthor(args)
    }
  }
});

module.exports = sdlSchema;
