const express = require("express");
const db = require("./docker/db");
const { PORT } = require("./env-donfig");
const addDataToDB = require("./authorsAndBooks");

const app = express();

db.connect();
db.connection.on("connected", () => {
  addDataToDB();
});

app.use("/", (req, res) => {
  res.send("Welcome...");
});

app.listen(PORT || 4001, () => {
  console.log("Server running on PORT", PORT);
});
