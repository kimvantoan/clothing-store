const Order = require("../model/order.model.js");
const OrderItem = require("../model/orderItem.model.js");
const { findUserCart } = require("./cart.service");
const { findUserById } = require("./user.service.js");

const place_order = async (userId, reqData) => {
  let orderItems = [];
  const user = await findUserById(userId);
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

  const order = await new Order({
    user: userId,
    orderItems,
    shippingAddress: reqData.shipAddress,
    totalPrice: cart.totalPrice,
    totalDiscountPrice: cart.totalDiscount,
    totalItem: cart.totalItem,
    paymentDetails: paymentDetails,
    deliveryDate: Date.now() + 2 * 24 * 60 * 60 * 1000,
  }).save();

  user.orders.push(order._id);

  await user.save();

  return order;
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

const update_orderStatus = async (id, reqData) => {
  const order = await find_orderById(id);
  order.orderStatus = reqData.orderStatus;
  return await order.save();
};

module.exports = {
  place_order,
  find_orderById,
  find_allOrderByUser,
  find_all_order,
  update_orderStatus,
};
