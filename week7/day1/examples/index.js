//====== SMALL ======
//1.
//node, then console.log("Hello World")

//2.
console.log("Hello World, I am in Node."); //node exercise.js

//3.
//NOTE: for import, add "type": "module" in object for it to work COMMENT
// import express from "express";
// const app = express();
// app.use(express.json());
// const PORT = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });
// app.listen(PORT);

//4.
//npm --version

//5.
//mkdir cowsay-practice, cd cowsay-practice, npm init -y

//6.
// import * as cowsay from "cowsay";

// app.get("/cow1", (req, res) => {
//   res.send(
//     cowsay.say({
//       text: "I'm a mooodule",
//       e: "oO",
//       T: "U",
//     })
//   );
// });

//MEDIUM
//1.
import dns from "dns";
import { createInterface } from "readline";
let readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Domain Name: ", function (url) {
  readline.close();
  dns.lookup(url, function (error, address) {
    if (error) {
      console.log(error.message);
      return;
    }
    console.log("IP Address: ", address);
  });
});

// const dns = require("dns");
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Domain Name: ", function (url) {
//   readline.close();
//   dns.lookup(url, function (error, address) {
//     if (error) {
//       console.log(error.message);
//       return;
//     }
//     console.log("IP Address: ", address);
//   });
// });

//2.
