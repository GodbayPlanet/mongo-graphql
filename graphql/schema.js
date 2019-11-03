const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema
} = require("graphql");
const Author = require("../models/author");
const Book = require("../models/book");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
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
      args: { author_name: { type: new GraphQLNonNull(GraphQLString) } },
      async resolve(_, args) {
        const author = await Author.findOne({ name: args.author_name });
        return author;
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
      args: { book_name: { type: new GraphQLNonNull(GraphQLString) } },
      async resolve(_, args) {
        const book = await Book.findOne({ name: args.book_name });
        return book;
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
