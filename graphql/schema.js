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
    name: { type: new GraphQLNonNull(GraphQLString) },
    age: { type: GraphQLInt },
    books: {
      type: new GraphQLList(BookType),
      resolve(parent, args) {
        return Book.find({ authorId: parent.id });
      }
    }
  })
});

const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    genre: { type: GraphQLString },
    isbn: { type: new GraphQLNonNull(GraphQLString) },
    year: { type: GraphQLInt },
    author: {
      type: new GraphQLNonNull(AuthorType),
      resolve(parent, args) {
        return Author.findById(parent.authorId);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    author: {
      type: AuthorType,
      args: { name: { type: new GraphQLNonNull(GraphQLString) } },
      async resolve(_, args) {
        const author = await Author.findOne({ name: args.name });
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
      args: { name: { type: new GraphQLNonNull(GraphQLString) } },
      async resolve(_, args) {
        const book = await Book.findOne({ name: args.name });
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

const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        age: { type: GraphQLInt }
      },
      resolve(_, args) {
        return new Author({
          name: args.name,
          age: args.age
        }).save();
      }
    },
    updateAuthor: {
      type: AuthorType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
      },
      resolve(_, args) {
        return Author.findByIdAndUpdate(args.id, {
          name: args.name,
          age: args.age
        });
      }
    },
    deleteAuthor: {
      type: AuthorType,
      args: { id: { type: new GraphQLNonNull(GraphQLString) } },
      resolve(_, args) {
        return Author.findByIdAndRemove(args.id);
      }
    },
    addBook: {
      type: BookType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: GraphQLString },
        isbn: { type: new GraphQLNonNull(GraphQLString) },
        year: { type: GraphQLInt },
        authorId: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(_, args) {
        return new Book({
          name: args.name,
          genre: args.genre,
          isbn: args.isbn,
          year: args.year,
          authorId: args.authorId
        }).save();
      }
    },
    updateBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        isbn: { type: GraphQLString },
        year: { type: GraphQLInt },
        authorId: { type: GraphQLString }
      },
      resolve(_, args) {
        return Book.findByIdAndUpdate(
          args.id,
          {
            name: args.name,
            genre: args.genre,
            isbn: args.isbn,
            year: args.year,
            authorId: args.authorId
          },
          { new: true }
        );
      }
    },
    deleteBook: {
      type: BookType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(_, args) {
        return Book.findByIdAndRemove(args.id);
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
