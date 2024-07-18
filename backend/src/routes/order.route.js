const express = require("express");
const { authMiddleware, isAdmin } = require("../middleware/auth.js");
const {
  placeOrder,
  findOrderById,
  findAllOrderByUser,
  inprogressOrder,
  shippedOrder,
  deliveredOrder,
  findAllOrder,
} = require("../controller/order.controller.js");

const Router = express.Router();

Router.post("/placeOrder", authMiddleware, placeOrder);
Router.get("/allOrder",isAdmin, findAllOrder);
Router.get("/:id", authMiddleware, findOrderById);
Router.get("/", authMiddleware, findAllOrderByUser);
Router.post("/inprogress", isAdmin, inprogressOrder);
Router.post("/shipped", isAdmin, shippedOrder);
Router.post("/delivered", isAdmin, deliveredOrder);

module.exports = Router;
