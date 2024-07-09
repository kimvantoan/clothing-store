const express = require("express");
const cors = require("cors");
const { connectDb } = require("./config/db");
const app = express();

app.use(cors());

app.use("/", (req, res) => {
  res.json("welcome to clothing store");
});

app.listen(3000, async () => {
  await connectDb;
  console.log("clothing store listing on port: 3000");
});
