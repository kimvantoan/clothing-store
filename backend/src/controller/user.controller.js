const User = require("../model/user.model.js");

const getAllUser = async (req, res) => {
  try {
    const users = await User.find({});

    res.json({ success: true, users });
  } catch (error) {
    console.log(error);

    return res.json({ success: false, message: "Error" });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    res.json({ success: true, user });
  } catch (error) {
    console.log(error);

    return res.json({ success: false, message: "Error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { firstname, lastname, email, mobile } = req.body;

    const { userId } = req.body;

    await User.findByIdAndUpdate(userId, {
      firstname,
      lastname,
      email,
      mobile,
    });
    res.status(200).json({ success: true, message: "update successfully" });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: "Error" });
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.body.userId);

    res
      .status(200)
      .json({ success: true, message: "delete user successfully" });
  } catch (error) {
    console.log(error);

    res.status(500).json({ success: false, message: "Error" });
  }
};

module.exports = { getAllUser, getUserById, updateUser, deleteUser };
