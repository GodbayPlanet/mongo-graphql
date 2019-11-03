const express = require("express");
const graphqlHTTP = require("express-graphql");

const db = require("./docker/db");
const { PORT } = require("./env-donfig");
const addDataToDB = require("./authorsAndBooks");
const schema = require("./graphql/schema");
const sdlSchema = require("./graphql/SDLSchema.js");

const app = express();

db.connect();
db.connection.on("connected", () => {
  // addDataToDB();
});

// Note: If you want to use graphQL schema that is created using
// schema-first/SDL-first approach use "sdlSchema" in graphqlHTTP
// and if you want to use graphQL schema that is created using JavaScript objects
// also known as code-first/resolvers-first use "schema" in graphqlHTTP
app.use(
  "/graphql",
  graphqlHTTP({
    schema: sdlSchema,
    graphiql: true
  })
);

app.listen(PORT || 4001, () => {
  console.log("Server running on PORT", PORT);
});
