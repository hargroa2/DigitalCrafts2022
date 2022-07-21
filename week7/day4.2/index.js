const express = require("express");
const { Pets, Clients } = require("./sequelize/models");
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get("/pets", async (req, res) => {
  const pets = await Pets.findAll();
  res.json(pets);
});

app.post("/pets", async (req, res) => {
  const newPet = await Pets.create(req.body);
  res.json(newPet);
});

app.delete("/pets", async (req, res) => {
  const pet = await Pets.destroy({
    where: {
      id: req.body.id,
    },
  });
  res.json(pet);
});

app.put("/pets", async (req, res) => {
  const pet = await Pets.update(req.body, {
    where: {
      id: req.body.id,
    },
  });
  res.json(pet);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
