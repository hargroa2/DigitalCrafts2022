// const Pool = require("pg").Pool;
// // replace database with the name of your local database on on your computer
// const creds = require("./sesrver/databaseConnection");
// const app = express();
// app.use(express.json());
// const creds = new Pool({
//   host: "localhost", //name of host
//   port: 5432, //port number of database
//   database: "anime",
//   // name of database
//   user: "AmandaHargrove",
//   // import your password from your .env file and inerpolate it here
//   password: "",
// });

// module.exports = creds;
//exporting a new class that contains a connection to our database. WIll export credentials to our server

const Pool = require("pg").Pool;
// replace database with the name of your local database on on your computer
const creds = new Pool({
  host: "localhost",
  port: 5432,
  database: "AmandaHargrove",
  //
  user: "AmandaHargrove",
  // import your password from your .env file and inerpolate it here
  password: "",
});

module.exports = creds;
