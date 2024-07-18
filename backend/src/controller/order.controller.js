const {
  place_order,
  find_orderById,
  shipped_order,
  delivered_order,
  inprogress_order,
  find_allOrderByUser,
  find_all_order,
} = require("../service/order.service");

const placeOrder = async (req, res) => {
  try {
    const { userId } = req.body;

    await place_order(userId, req.body);

    res
      .status(200)
      .json({ success: true, message: "place order successfully" });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "Error" });
  }
};

const findAllOrder = async (req, res) => {
  try {
    const orders = await find_all_order();

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, message: "Error" });
  }
};

const findOrderById = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await find_orderById(id);

    res.status(200).json({ success: true, order });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "Error" });
  }
};

const findAllOrderByUser = async (req, res) => {
  try {
    const { userId } = req.body;

    const orders = await find_allOrderByUser(userId);

    res.status(200).json({ success: true, orders });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "Error" });
  }
};

const inprogressOrder = async (req, res) => {
  try {
    const { id } = req.body;

    await inprogress_order(id);

    res.status(200).json({ success: true, message: "Inprogress" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
};

const shippedOrder = async (req, res) => {
  try {
    const { id } = req.body;

    await shipped_order(id);

    res.status(200).json({ success: true, message: "Shipped" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
};

const deliveredOrder = async (req, res) => {
  try {
    const { id } = req.body;

    await delivered_order(id);

    res.status(200).json({ success: true, message: "Inprogress" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
};

module.exports = {
  placeOrder,
  findOrderById,
  findAllOrderByUser,
  inprogressOrder,
  shippedOrder,
  deliveredOrder,
  findAllOrder,
};
