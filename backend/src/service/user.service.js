const User = require("../model/user.model.js");
const Cart = require("../model/cart.model.js");
const bcrypt = require('bcrypt')

const createUser = async (reqData) => {
  const { firstname, lastname, email, password } = reqData;

  const salt = await bcrypt.genSalt(10);

  const hashPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    firstname: firstname,
    lastname: lastname,
    email: email,
    password: hashPassword,
  });

  const user = await newUser.save();

  await new Cart({ user }).save();

  return user;
};

const findUserByEmail = async (email) => {
  const existEmail = await User.findOne({ email: email });
  return existEmail;
};
const findUserById = async (id) => {
  const user = await User.findById(id).populate('address');
  return user;
};

const findAllUser = async () => {
  const users = await User.find();
  return users;
};

const update_User = async (userId, reqData) => {
  const newUser = await User.findByIdAndUpdate(userId, reqData);
  return newUser;
};

const delete_User = async (userId, reqData) => {
  await User.findByIdAndDelete(userId);
};
module.exports = {
  createUser,
  findUserByEmail,
  findAllUser,
  findUserById,
  update_User,
  delete_User,
};
