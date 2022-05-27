const express = require("express");
const app = express();
const PORT = process.env.PORT | 3001;
const todo = require("./todo.route");
const cors = require("cors");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.use(todo);

app.listen(PORT, () => console.log("Server run on port " + PORT));
