const express = require("express");
const router = require("../day2/controller/routes/pets");
const app = express();
const es6Renderer = require("express-es6-template-engine");
const PORT = 3000;
const { Player, Sessions } = require("./models");
const models = require("./models");

const session = require("express-session");
const cookieParser = require("cookie-parser");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const store = new SequelizeStore({
  db: models.sequelize,
});

app.use(express.json());
app.use(cookieParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUnintialized: true,
    store: store,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);
store.sync();
app.use(express.static("public"));
app.engine("html", es6Renderer);
app.set("views", "../public/views");
app.set("view engine", "html");

app.post("/login", async (req, res) => {
  const user = await Player.findOne({
    where: {
      username: req.body.username,
      password: req.body.password,
    },
  });
  if (user) {
    res.session.user = user;
    res.json({
      message: "Login Success",
      user: user,
    });
  } else {
    res.json({
      message: "Login Failed",
    });
  }
  res.send(user);
}); //check Postman http://localhost:3000/login with username and password object in the body

const checkLogin = async (req, res, next) => {
  const sessionValid = await sessionStorage.findOne({
    where: {
      sid: req.session.sid,
    },
  });

  if (sessionValid) {
    next();
  } else {
    res.json({
      message: "Login Failed",
    });
  }
};

app.post("/delete_all_secrets", checkLogin, async (req, res) => {
  res.send("You must be legit, we deleted everything");
}); //http://localhost:3000/delete_all_secrets after logging in via http://localhost:3000/login

app.get("/home", (req, res) => {
  res.render("index", { locals: { user: req.session.user.username } });
});

app.listen(PORT, console.log(`Listening on port ${PORT}`));
