const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.DEV_APP_PORT,
  DEV_DB_HOST: process.env.DEV_DB_HOST,
  DEV_DB_PORT: process.env.DEV_DB_PORT,
  DEV_DB_NAME: process.env.DEV_DB_NAME,
  MONGO_USERNAME: process.env.MONGO_USERNAME,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
  NODE_ENV: process.env.NODE_ENV
};
