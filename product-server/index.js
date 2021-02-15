const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "localhost",
  port: 3306,
  user: "chris",
  password: "password",
  database: "project01",
});
const port = 4000;

app.use(bodyParser.json());
app.use(cors());

app.get("/users", (req, res) => {
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query("SELECT * FROM users")
        .then((result) => {
          console.log(result);
          conn.end();
          res.json({ data: result, success: true });
        })
        .catch((err) => {
          console.log(err);
          conn.end();
          res.json({ error: err, success: false });
        });
    })
    .catch((err) => {
      console.log(err);
      res.json({ error: err, success: false });
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));