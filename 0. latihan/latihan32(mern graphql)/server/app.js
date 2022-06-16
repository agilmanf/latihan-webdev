const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const app = express();
const port = process.env.PORT || 3001;

const schema = require("./schema/schema");

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req, res) => {
  res.send("oke");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
