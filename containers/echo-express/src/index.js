const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  req.query.name
    ? res.send(`Hello ${req.query.name}`)
    : res.send("Who the heck are you");
});

app.listen(port, () => {
  console.log(`echo listening at http://localhost:${port}`);
});
