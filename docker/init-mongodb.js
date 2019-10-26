db.createUser({
  user: "godbay_planet",
  pwd: "super_password",
  roles: [
    {
      role: "readWrite",
      db: "mongo-dev-db"
    }
  ]
});
