# MongoDB with GraphQL

## Reguirements

### NodeJs and npm installed on your OS environment.

## DotEnv

### Project uses DotEnv moodule as a tool to locally store variables

### Create .env file under the root directory and add the following variables to the `.env` file:

```
  DEV_APP_PORT=3000

  # Database
  DEV_DB_HOST=127.0.0.1
  DEV_DB_PORT=27017
  DEV_DB_NAME=mongo-dev-db
  MONGO_USERNAME=godbay_planet
  MONGO_PASSWORD=super_password
  NODE_ENV=dev
```

### and create .env file under `docker` folder and add the following variables:

```
  MONGO_ROOT_USERNAME=root
  MONGO_ROOT_PASSWORD=secret_password
```

### You can set your own values for the above `MONGO_ROOT_USERNAME` and `MONGO_ROOT_PASSWORD`. This is feature that latest mongo database image supports for creating a simple user with the `root` role in the admin authentication database.

### To start MongoDB coontainer got to `docker` folder and execute `create-mongo-db-sh` script.
