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

app.get("/databases", (req, res) => {
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query(
          "select schema_name as database_name from information_schema.schemata order by schema_name"
        )
        .then((result) => {
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

app.get("/tables", (req, res) => {
  const { schema } = req.query;
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query(
          `SELECT * FROM information_schema.tables WHERE table_schema=${schema}`
        )
        .then((result) => {
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

app.get("/procedures", (req, res) => {
  const { schema } = req.query;
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query(
          `SELECT * FROM information_schema.routines WHERE routine_type = 'PROCEDURE' AND routine_schema = '${schema}'`
        )
        .then((result) => {
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

app.get("/triggers", (req, res) => {
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query(
          `SELECT trigger_schema, trigger_name, action_statement from information_schema.triggers`
        )
        .then((result) => {
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

app.get("/views", (req, res) => {
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query(`SELECT * FROM information_schema.VIEWS`)
        .then((result) => {
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

app.get("/indexes", (req, res) => {
  pool
    .getConnection()
    .then((conn) => {
      conn
        .query(`SELECT * FROM INFORMATION_SCHEMA.STATISTICS`)
        .then((result) => {
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

app.listen(port, () => console.log(`MariaDB app listening on port ${port}!`));
