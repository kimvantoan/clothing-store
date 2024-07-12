const express = require("express");
const cors = require("cors");
const { connectDb } = require("./config/db");
const app = express();
const authRoute = require("./routes/auth.route.js");
const userRoute = require("./routes/user.route.js");
const productRoute = require("./routes/product.route.js");
const reviewRoute = require("./routes/review.route.js");
const ratingRoute = require("./routes/rating.route.js");

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/product", productRoute);
app.use("/review", reviewRoute);
app.use("/rating", ratingRoute);

connectDb();

app.listen(3000, async () => {
  console.log("clothing store listing on port: 3000");
});
