const express = require("express");
const router = express.Router();
const { Pets } = require("../../../sequelize/models");
//require the model so you can print the data onto the page

//CREATE
router.post("/create_pets", (req, res) => {
  res.send("create pets");
});

//READ
router.get("/get_pets", async (req, res) => {
  const pets = await Pets.findAll({ raw: true });
  //   const students = [
  //     { name: "Olivia" },
  //     { name: "Stacy" },
  //     { name: "Andrea" },
  //     { name: "Rahmin" },
  //     { name: "Ethan" },
  //   ];
  res.render("index", { locals: { pets: pets } });
});

//UPDATE
router.put("/update_pets", (req, res) => {
  res.send("update pets");
});

//DESTROY
router.delete("/destroy_pets", (req, res) => {
  res.send("destroy pets");
});

module.exports = router;
