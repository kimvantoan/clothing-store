const express = require("express");
const {
  createProduct,
  getAllProduct,
  getProductById,
  deleteProductById,
  updateProduct,
} = require("../controller/product.controller");
const Router = express.Router();
const { isAdmin } = require("../middleware/auth.js");
const upload = require("../middleware/multer.js");

Router.post("/createProduct", isAdmin, upload.single("image"), createProduct);
Router.get("/", getAllProduct);
Router.get("/:id", getProductById);
Router.delete("/delete/:id", isAdmin, deleteProductById);
Router.patch("/update/:id", isAdmin, upload.single("image"), updateProduct);

module.exports = Router;
