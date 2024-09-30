const express = require("express");
const Router = express.Router();
const {
  register,
  login,
  loginAdmin,
  logout,
  changePassword,
} = require("../controller/auth.controller.js");

Router.post("/register", register);
Router.post("/login", login);
Router.post("/loginAdmin", loginAdmin);
Router.get("/logout", logout);
Router.post("/changePassword", changePassword);

module.exports = Router;
