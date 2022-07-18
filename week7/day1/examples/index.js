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
//1. Write a program that prompts the user for a domain name, looks up the IP address for the domain, and prints it out.
// import dns from "dns";
// import { createInterface } from "readline";
// let readline = createInterface({
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

//== REQUIRE WAY" ==
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

//2.Write a program that prompts the user to enter a file name, and reads in the contents of the file, convert the text to all caps, and prints it out.Assuming the file file1.txt contains the text: "Hello, I am file 1."
// import fs from "fs";
// import { createInterface } from "readline";
// let readline = createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("filename: ", function (filename) {
//   readline.close();
//   fs.readFile(filename, function (error, buffer) {
//     if (error) {
//       console.log(error.message);
//       return;
//     }
//     const content = buffer.toString();
//     const upperCased = content.toUpperCase();
//     console.log(upperCased);
//   });
// });

//3. Write a program to prompt the user for two file names, the first file will be the input and the second file will be the output. The program will read in the contents of the input file, convert its text to all caps, and then write the resulting contents to the output file.
import fs from "fs";
import { createInterface } from "readline";
let readline = createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Input file: ", function (inputFile) {
  fs.readFile(inputFile, function (error, buffer) {
    if (error) {
      console.log(error.message);
      readline.close();
      return;
    }
    readline.question("Output file: ", function (outputFile) {
      readline.close();
      const content = buffer.toString();
      const upperCased = content.toUpperCase();
      fs.writeFile(outputFile, upperCased, function (error) {
        if (error) {
          console.log(error.message);
          return;
        }
        console.log("Wrote to file ", outputFile);
      });
    });
  });
});
