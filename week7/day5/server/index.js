const express = require("express");
const { User, Longboard, Order } = require("../database/models");
const app = express();
const PORT = 3000;
// console.log(User, Longboard, Order);

app.use(express.json()); //will allow us to use the req.body aspect of our data

//crud for user, longboard, and order
app.post("/user", async (req, res) => {
  //destructuring
  const { firstName, lastName, email, password } = req.body;
  console.log(req.body);
  const userToCreate = {
    firstName,
    lastName,
    email,
    password,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const user = await User.create(userToCreate);
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send(error);
  }

  //   const name = req.body.name;
  //   const age = req.body.age;
  //   const height = req.body.age;
  //   const weight = req.body.weight;

  //   try {
  // const user = await User.create({
  //our schema that we want to create
  //we are adding information to our model through a route.
  //hard coded data (eventually we will add via req.body). dynamic data = req.body
  //   firstName: "Super",
  //   lastName: "Mario",
  //   email: "plumbersrock@gmail.com",
  //   password: "itsamario",
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });
  // res.status(200).send(user);
  //   } catch (error) {
  // res.status(400).send(error);
  //   }
});
app.post("/longboard", async (req, res) => {
  const { name, brand, length } = req.body;
  console.log(req.body);
  const longboardToCreate = {
    name,
    brand,
    length,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const longboard = await Longboard.create(longboardToCreate);
    res.status(200).send(longboard);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.post("/order", async (req, res) => {
  const { userId, longboardId, price } = req.body;
  console.log(req.body);
  const orderToCreate = {
    userId,
    longboardId,
    price,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  try {
    const order = await Order.create(orderToCreate);
    res.status(200).send(order);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
