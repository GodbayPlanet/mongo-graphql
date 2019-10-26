const mongoose = require("mongoose");
const { NODE_ENV } = require("../env-donfig");

const config = require("../config").get(NODE_ENV);

const options = {
  useNewUrlParser: true,
  reconnectInterval: 500,
  connectTimeoutMS: 10000
};

const { username, password, host, port, name: databaseName } = config.database;

const dbURL = `mongodb://${username}:${password}@${host}:${port}/${databaseName}`;

const connection = mongoose.connection;

connection.on("connected", () =>
  console.info(`Connected to MongoDB, database name ${databaseName}`)
);
connection.on("disconnected", () => console.info("Disconnected from MongoDB"));

exports.connection = connection;
exports.connect = () => {
  return mongoose.connect(dbURL, options);
};
