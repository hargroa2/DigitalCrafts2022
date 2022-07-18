//start with npm init -y in the terminal
//running npm i means look for a package.json and makes a new node_modules if anything goes wrong in it
//You usually have to put node_modules
//As long as you have a package.json,you can run npm i to get everything back file-wise

// const app = require("express");
// console.log(app);
import express from "express";
const app = express();
// // console.log(app);
// const PORT = 3000; //can pick a port number between 3000 and 3100.
// //nodemon simply refreshes the server

app.use(express.json());

//Routes: when you make a server, you're making it somewhere. You are telling that port (like its a gate at an airport) that its route, or the exact gate, at our "airport"
//Usually will have its HTTP method on it (get, post, etc.).
//It will always include in this order: a req and a res (request and a reponse)
// console.log("I'm outside the route");
// app.get("/", (req, res) => {
//   //inside here, you can do whatever you want inside of it
//   console.log("I am inside the route");
//   res.send("this is the home page");
// }); //shows this message when you click "send" in Postman. Note that you cannot send back a response after you have sent it once. You can only send one response at a time

// app.get("/benji", (req, res) => { //simply change in Postman "localhost: 3000/benji"
//   res.send("lizard");
// });

//Every route is made up of a request and a response. When you hit the route's the request. When you send back data, that is in the response
// app.post("/create_user", (req, res) => {
//   res.send(`Created user ${req.body.discplayer}`);
// });

//3routes, one a get, 2 a post
import * as cowsay from "cowsay";
const PORT = 3030;

app.get("/cow1", (req, res) => {
  res.send(
    cowsay.say({
      text: "I'm a mooodule",
      e: "oO",
      T: "U",
    })
  );
});

app.post("/cow2", (req, res) => {
  res.send(
    cowsay.say({
      text: req.body.text,
      e: "oO",
      T: "U",
    })
  );
});

app.post("/cow3", (req, res) => {
  res.send(
    cowsay.say({
      text: req.body.text,
      e: "oO",
      T: "U",
    })
  );
});

app.listen(PORT, console.log(`listening on port ${PORT}`));
//type nodemon app.js, which will show that the server is working
