// default expess app is set to port 3000
const express = require("express");
const creds = require("./server/databaseConnection");
const app = express();
app.use(express.json());
const port = 3000;

//READ ALL ANIME DATA
app.get("/read_anime", (req, res) => {
  console.log(creds);
  creds.query("SELECT * FROM Anime", (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.json(result.rows);
    }
  });
});

app.post("/create_anime", (req, res) => {
  console.log(req.body);
  creds.query(
    "INSERT INTO Anime (show, genre, year_created) VALUES ($1, $2, $3)",
    [req.body.show, req.body.genre, req.body.year_created],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
});

//UPDATE ANIME DATA
app.post("/update_anime", (req, res) => {
  creds.query(
    // -- UPDATE Cartoons SET year_created = '1990' WHERE id = 1;
    "UPDATE Anime SET show = $1, genre = $2 WHERE id = $3",
    [req.body.show, req.body.genre, req.body.id],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
});

//DELETE ANIME DATA
app.post("/delete_anime", (req, res) => {
  creds.query(
    // DELETE FROM Anime WHERE id = $3
    "DELETE FROM Anime WHERE id = $1",
    [req.body.id],
    (err, result) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(result);
      }
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
