const express = require("express");
const {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} = require("../controller/user.controller");
const Router = express.Router();
const { authMiddleware } = require("../middleware/auth.js");

Router.get("/", authMiddleware, getAllUser);
Router.get("/:id", authMiddleware, getUserById);
Router.patch("/update", authMiddleware, updateUser);
Router.delete("/delete", authMiddleware, deleteUser);

module.exports = Router;
