const express = require("express");
const {
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
  getInfo,
} = require("../controller/user.controller");
const Router = express.Router();
const { authMiddleware,isAdmin } = require("../middleware/auth.js");

Router.get("/", authMiddleware, getAllUser);
Router.get("/info", authMiddleware, getInfo);
Router.get("/:id", isAdmin, getUserById);
Router.patch("/update", authMiddleware, updateUser);
Router.delete("/delete", authMiddleware, deleteUser);

module.exports = Router;
