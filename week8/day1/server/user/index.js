const { encryption } = require("../../database/models");
const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();

router.get("/all_users", async (req, res) => {
  const usersToGet = await encryption.findAll();
  res.send(usersToGet);
});

router.get("/by_id/:id", async (req, res) => {
  const { id } = req.params;
  const usersToGet = await encryption.findAll({
    where: {
      id: id,
    },
  });
  res.send(usersToGet);
});

router.post("/create_user", async (req, res) => {
  const { username, password } = req.body; //const var = req.body.password
  try {
    const salt = await bcrypt.genSalt(5); //generates a random thing
    const hashedPassword = await bcrypt.hash(password, salt); //hashes the password and adds salt to randomize further
    const encryptedUser = {
      username: username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    const createUser = await encryption.create(encryptedUser);
    res.send(createUser);
  } catch (error) {
    res.send(error);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  //const var = req.body.password
  try {
    //find user based on username in our database
    const findUser = await encryption.findOne({
      where: {
        username: username,
      },
    });

    const userWeFound = findUser.dataValues;
    console.log(userWeFound.password);

    //decryption -> comparing the password submitted in req.body to the one in the database
    const validated = await bcrypt.compare(password, userWeFound.password);
    console.log(validated);
    if (!validated) {
      res
        .status(400)
        .send(
          "That user does not exist in our database. Did you get the credentials correct?"
        );
    } else {
      res.status(200).send("Successful login");
      //remember: .redirect("/home") will redirect you to the home page that is made using an HTML template engine
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
