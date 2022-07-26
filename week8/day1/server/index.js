const express = require("express");
const app = express();
const PORT = 3000;

const userRoutes = require("./user");
const es6Renderer = require("express-es6-template-engine");
const restaurantRoutes = require("./restaurants");

//middleware
app.use(express.static("public"));
app.engine("html", es6Renderer);
app.set("views", "../public/views");
app.set("view engine", "html");

app.use(express.json());
/*
{
    "username": "amandaissmart",
    "password": "notreally"
}
hashing -> taking what you're given and then running it through a hashing algorithm that encrypts text
*/
app.use("/users", userRoutes);
app.use("/restaurants", restaurantRoutes);

app.get("/", function (req, res) {
  res.render("index");
});

// app.put("/update_password", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const findUser = await encryption.findOne({
//       where: {
//         username: username,
//       },
//     });
//     try {
//       const salt = await bcrypt.genSalt(5);
//       const hashedPassword = await bcrypt.hash(password, salt);
//       findUser.password = hashedPassword;
//       findUser.update({
//         username: username,
//         password: hashedPassword,
//         updateAt: new Date(),
//       });
//       res.send("Updated password");
//     } catch (error) {
//       console.log(error);
//       res.status(400).send(error);
//     }
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// });

// app.delete("/delete_password", async (req, res) => {
//   const { username } = req.body;
//   try {
//     const findUser = await encryption.findOne({
//       where: {
//         username: username,
//       },
//     });
//     findUser.destroy();
//     res.send("User deleted");
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);
//   }
// });

app.listen(PORT, console.log(`Listening on port ${PORT}`));
