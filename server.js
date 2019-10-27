const express = require("express");
const graphqlHTTP = require("express-graphql");

const db = require("./docker/db");
const { PORT } = require("./env-donfig");
const addDataToDB = require("./authorsAndBooks");
const schema = require("./graphql/schema");

const app = express();

db.connect();
db.connection.on("connected", () => {
  // addDataToDB();
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(PORT || 4001, () => {
  console.log("Server running on PORT", PORT);
});
