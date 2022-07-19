//npm init
// import express from "express";
const express = require("express");

const es6Renderer = require("express-es6-template-engine");
const app = express();
const PORT = 3001;

// import es6Renderer from "express-es6-template-engine";

//do middleware before your routes
app.engine("html", es6Renderer);
app.set("views", "templates");
app.set("view engine", "html");
app.use(express.static("/public"));

//route
app.get("/", (req, res) => {
  const user = { name: "Amanda" };
  res.render("home", {
    locals: { user: user, teacher: "Joe", students: ["Amanda", "Carlos"] },
  });
});

app.get("/index", (req, res) => {
  res.render("index");
});

app.post("/home", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
