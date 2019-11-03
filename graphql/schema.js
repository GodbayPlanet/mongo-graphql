const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require("graphql");
const Author = require("../models/author");
const Book = require("../models/book");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    isbn: { type: GraphQLString },
    year: { type: GraphQLInt },
    authorId: { type: GraphQLString }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    author: {
      type: AuthorType,
      args: { author_name: { type: GraphQLString } },
      resolve(_, args) {
        return Author.findOne({ name: args.author_name }).then(
          author => author
        );
      }
    },
    authors: {
      type: new GraphQLList(AuthorType),
      resolve() {
        return Author.find({});
      }
    },
    book: {
      type: BookType,
      args: { book_name: { type: GraphQLString } },
      resolve(_, args) {
        return Book.findOne({ name: args.book_name }).then(book => book);
      }
    },
    books: {
      type: new GraphQLList(BookType),
      resolve() {
        return Book.find({});
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
