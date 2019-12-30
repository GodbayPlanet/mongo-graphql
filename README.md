# MongoDB with GraphQL

## Reguirements

#### NodeJs and npm installed on your OS environment

## DotEnv

#### Project uses DotEnv moodule as a tool to locally store variables

#### Create .env file under the root directory and add the following variables to the `.env` file:

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

#### and create .env file under `docker` folder and add the following variables:

```
  MONGO_ROOT_USERNAME=root
  MONGO_ROOT_PASSWORD=secret_password
```

#### You can set your own values for the above `MONGO_ROOT_USERNAME` and `MONGO_ROOT_PASSWORD`. This is feature that latest mongo database image supports for creating a simple user with the `root` role in the admin authentication database.

#### To start MongoDB coontainer got to `docker` folder and execute `create-mongo-db-sh` script.

#### Go to `http://localhost:3000/graphql` there you can play around with GraphQL. :)

#### Query for getting all authors.

`{ authors { name id books { name } } }`

#### Query for getting all author by name.

`{ author(name: "Robert C. Martin") { name id books { name } } }`

#### Mutation for adding author.

`mutation { addAuthor(name: "Robert C. Martin", age: 55) { id, name, age } }`

#### Mutation for updating author.

`mutation { updateAuthor(id: "5dbf071df17010b73ce8de8f", name: "Robert C. Martin") { name } }`

#### Mutation for deleting author.

`mutation { deleteAuthor(id: "5dbf06322b3963b65f7d2ddc") { id } }`

#### Query for getting books.

`{ books { id name author { name id } } }`

#### Query for getting book by name.

`{ book(book_name: "You Dont know JS") { isbn year author { name } } }`

#### Mutation for adding book.

`mutation { addBook(name: "The Clean Coder: A Code of Conduct for Professional Programmers", genre: "Programming", isbn: "12312313", year: 2000, authorId: "5dbf071df17010b73ce8de8f") { id name genre isbn author { name id } } }`

#### Mutation for updating book.

`mutation { updateBook(id: "5dbf07b1f17010b73ce8de91", name: "The Clean Coder", authorId: "5dbf071df17010b73ce8de8f") { name } }`

#### Mutation for deleting book.

`mutation { deleteBook(id: "5dbf07b1f17010b73ce8de91") { name } }`
