const { makeExecutableSchema } = require("graphql-tools");
const Author = require("../models/author");
const Book = require("../models/book");

const schema = `
  type Author {
    id: String!
    name: String
    age: Int
  }

  type Book {
    id: String!
    name: String
    genre: String
    isbn: String
    year: Int
    authorId: String!
  }

  type Query {
    author(name: String!): Author
    authors: [Author]
    book(name: String!): Book
    books: [Book]
  }
`;

const sdlSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: {
    Query: {
      author: (_, args) =>
        Author.findOne({ name: args.name }).then(author => author),
      authors: () => Author.find({}),
      book: (_, args) => Book.findOne({ name: args.name }).then(book => book),
      books: () => Book.find({})
    }
  }
});

module.exports = sdlSchema;
