const express = require("express");
const { User } = require("./models/");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

//Read all users
app.get("/users", async (req, res) => {
  const users = await User.findAll();
  res.send(users);
});

//Read a user by id
app.get("/users/:id", async (req, res) => {
  //3000/users/1
  const id = req.params.id;
  const user = await User.findByPk(id);
  res.send(user);
});

app.listen(port, () => console.log(`listening on port ${port}`));
