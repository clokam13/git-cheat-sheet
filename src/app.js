const express = require("express");
require("dotenv");

const app = express();

app.get("/api/v1/test", (req, res) => {
  res.send("Hello there - modified!");
});

app.listen(process.env.PORT, () => {
  console.log(`Open localhost:${process.env.PORT} to run the API`);
});
