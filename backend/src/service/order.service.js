const Order = require("../model/order.model.js");
const OrderItem = require("../model/orderItem.model.js");
const { findUserCart } = require("./cart.service");

const place_order = async (userId, reqData) => {
  let orderItems = [];

  const cart = await findUserCart(userId);

  for (let item of cart.cartItem) {
    const orderItem = await new OrderItem({
      product: item.product,
      size: item.size,
      quantity: item.quantity,
      price: item.price,
      discountedPrice: item.discount,
      userId: item.userId,
      color: item.color,
    }).save();
    orderItems.push(orderItem);
  }

  let paymentDetails = {
    method: reqData.paymentMethod,
  };

  return await new Order({
    user: userId,
    orderItems,
    shippingAddress: reqData.shipAddress,
    totalPrice: cart.totalPrice,
    totalDiscountPrice: cart.totalDiscount,
    totalItem: cart.totalItem,
    paymentDetails: paymentDetails,
    deliveryDate: Date.now() + 2 * 24 * 60 * 60 * 1000,
  }).save();
};

const find_all_order = async () => {
  const orders = await Order.find();
  return orders;
};

const find_orderById = async (id) => {
  const order = await Order.findById(id)
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress")
    .populate("user");

  return order;
};

const find_allOrderByUser = async (userId) => {
  const orders = await Order.find({ user: userId }).populate({
    path: "orderItems",
    populate: { path: "product" },
  });

  return orders;
};

const inprogress_order = async (id) => {
  const order = await find_orderById(id);

  order.orderStatus = "Inprogress";

  return await order.save();
};

const shipped_order = async (id) => {
  const order = await find_orderById(id);

  order.orderStatus = "Shipped";

  return await order.save();
};

const delivered_order = async (id) => {
  const order = await find_orderById(id);

  order.orderStatus = "Delivered";

  return await order.save();
};

const cancelled_order = async (id) => {
  const order = await find_orderById(id);

  order.orderStatus = "Cancelled";

  return await order.save();
};
module.exports = {
  place_order,
  shipped_order,
  inprogress_order,
  delivered_order,
  find_orderById,
  find_allOrderByUser,
  find_all_order,
  cancelled_order,
};
