const express = require("express");
const router = express.Router();
const pool = require("./db");

router.get("/todo", (req, res) => {
  pool.query("SELECT * FROM todo", (err, results) => {
    if (err) throw err;

    res.json(results.rows);
  });
});

router.get("/todo/:id", (req, res) => {
  const { id } = req.params;
  pool.query(`SELECT * FROM todo WHERE tid = ${id}`, (err, results) => {
    if (err) throw err;

    res.json(results.rows);
  });
});

router.post("/todo", (req, res) => {
  const { description } = req.body;
  pool.query(
    `INSERT INTO todo (description) VALUES ('${description}')`,
    (err, result) => {
      if (err) throw err;

      res.status(201).send(`Insert to Database Success`);
    }
  );
});

router.put("/todo/:id", (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  pool.query(
    `UPDATE todo SET description = '${description}' WHERE tid = ${id}`,
    (err, result) => {
      if (err) throw err;

      if (results.rowCount === 0) return res.send("ID Not Found");
      res.status(201).send(`Edit Todo Success`);
    }
  );
});

router.delete("/todo/:id", (req, res) => {
  const { id } = req.params;
  pool.query(`DELETE FROM todo WHERE tid = ${id}`, (err, results) => {
    if (err) throw err;

    if (results.rowCount === 0) return res.send("ID Not Found");

    res.send("Delete Success");
  });
});

module.exports = router;
