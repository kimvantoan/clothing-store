const mongoose = require("mongoose");

const productSchema =new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
  },
  // discountPercent: {
  //   type: Number,
  // },
  quantity: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  color: {
    type:String,
    required:true
  },
  size: [
    {
      name: { type: String },
      quantity: { type: Number },
    },
  ],
  image: {
    type: String,
    required: true,
  },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ratings",
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "reviews",
    },
  ],
  numberRating: {
    type: Number,
    default: 0,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "categories",
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
