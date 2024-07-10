const express = require("express");
const cors = require("cors");
const {connectDb} = require("./config/db");
const app = express();
const authRoute= require('./routes/auth.route.js')

require('dotenv').config()

app.use(express.json())
app.use(cors());
app.use('/auth',authRoute)
connectDb()

app.listen(3000, async () => {
  console.log("clothing store listing on port: 3000");
});
