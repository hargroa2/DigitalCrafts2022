const { Restaurants } = require("../../database/models");
const express = require("express");
// const { application } = require("express");
const router = express.Router();

//full CRUD
//create 1 or more restaurant
router.post("/createRest", async (req, res) => {
  const newRest = await Restaurants.create(req.body);
  res.send(newRest);
});

//read 1 restaurant by id
router.get("/restId/:id", async (req, res) => {
  const { id } = req.body;
  const usersToGet = await Restaurants.findAll({
    where: {
      id: id,
    },
  });
  res.send(usersToGet);
});

//read 1 restaurant by name
router.get("/restName/:name", async (req, res) => {
  const { name } = req.body;
  const usersToGet2 = await Restaurants.findAll({
    where: {
      name: name,
    },
  });
  res.send(usersToGet2);
});

//read 1 or more restaurant by address
router.get("/restAdd/:address", async (req, res) => {
  const { address } = req.body;
  const usersToGet3 = await Restaurants.findAll({
    where: {
      address: address,
    },
  });
  res.send(usersToGet3);
});

//update the name of a restaurant
router.put("/restUpdate", async (req, res) => {
  const rest = await Restaurants.update(req.body, {
    where: {
      name: req.body.name,
    },
  });
  res.send(rest);
});

//update the address of the restaurant
router.put("/restUpdateAdd", async (req, res) => {
  const restAdd = await Restaurants.update(req.body, {
    where: {
      address: address,
    },
  });
  res.send(restAdd);
});

//delete 1 restaurant by id
router.delete("/restDelete/:id", async (req, res) => {
  const { id } = req.body;
  const idToDel = await Restaurants.destroy({
    where: {
      id: id,
    },
  });
  res.send(idToDel);
});

//delete 1 by name
router.delete("/restDelete/:name", async (req, res) => {
  const { name } = req.body;
  const usersToDel = await Restaurants.destroy({
    where: {
      name: name,
    },
  });
  res.send(usersToDel);
});

module.exports = router;
