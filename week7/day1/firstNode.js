// for (let i = 0; i < 10; i++) {
//   console.log("Hello from first script");
// }
console.log(process.argv); //returns an array showing the command-line arguments passed when Node was launched. It shows the executive path, then the path to the JS file, and any other elements will be any additional command-line arguments
//Using this, you can pass in arguments into a script

// const args = process.argv.slice(2);
// for (let arg of args) {
//   console.log(`Hi there, ${arg}`);
// }
//node firstNode.js Amanda Katie
//Hi there, Amanda
//Hi there, Katie

const fs = require("fs"); //creates an fs module, which creates an object with tons of methods
const folderName = process.argv(2) || "Project"; //first argument passed in
// console.log(fs);

// fs.mkdir("Dogs", { rescursive: true }, (err) => {
//   console.log("In the callback");
//   if (err) throw err;
// }); //asynchronous, so comes after the log below
// console.log("I come after mkdir in the file");
fs.mkdirSync(folderName); //synchronous version
// console.log("I come after mkdir in the file");

fs.writeFileSync(`${folderName}/index.html`);
fs.writeFileSync(`${folderName}/app.js`);
fs.writeFileSync(`${folderName}/style.css`);
//node firstNode.js Portfolio
//-> creates a folder named Portfolio and creates the 3 files inside of it
