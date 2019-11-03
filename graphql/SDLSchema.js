const { makeExecutableSchema } = require("graphql-tools");
const Author = require("../models/author");
const Book = require("../models/book");

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
      author: (_, args) =>
        Author.findOne({ name: args.name }).then(author => author),
      authors: () => Author.find({}),
      book: (_, args) => Book.findOne({ name: args.name }).then(book => book),
      books: () => Book.find({})
    },
    Mutation: {
      addAuthor: (_, args) =>
        new Author({ name: args.name, age: args.age }).save(),
      updateAuthor: (_, args) =>
        Author.findOneAndUpdate(args.id, { name: args.name, age: args.age }),
      deleteAuthor: (_, args) => Author.findByIdAndRemove(args.id)
    }
  }
});

module.exports = sdlSchema;
