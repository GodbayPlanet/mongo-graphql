const {
  PORT,
  DEV_DB_HOST,
  DEV_DB_PORT,
  DEV_DB_NAME,
  MONGO_USERNAME,
  MONGO_PASSWORD
} = require("./env-donfig");

const config = {
  dev: {
    app: {
      port: parseInt(PORT) || 3001
    },
    database: {
      host: DEV_DB_HOST || "127.0.0.1",
      port: parseInt(DEV_DB_PORT) || 27017,
      name: DEV_DB_NAME || "mongo-dev-db",
      username: MONGO_USERNAME,
      password: MONGO_PASSWORD
    }
  }
};

exports.get = env => config[env] || config.dev;
