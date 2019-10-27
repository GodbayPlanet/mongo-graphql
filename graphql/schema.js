const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLSchema
} = require("graphql");
const Author = require("../models/author");

const AuthorType = new GraphQLObjectType({
  name: "Author",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    author: {
      type: AuthorType,
      args: { author_name: { type: GraphQLString } },
      resolve(_, args) {
        return Author.findOne({ name: args.author_name }).then(
          author => author
        );
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
