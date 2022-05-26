const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const PORT = process.env.PORT | 3001;
const pool = require("./db");

const schema = require("./schema/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("Server is Running");
});

app.listen(PORT, () => console.log("Server run on port " + PORT));
