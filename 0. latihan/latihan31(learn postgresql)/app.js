const express = require("express");
const app = express();
const PORT = process.env.PORT | 3001;
const pool = require("./db");

const schema = require("./schema/schema");


app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(PORT, () => console.log("Server run on port " + PORT));
