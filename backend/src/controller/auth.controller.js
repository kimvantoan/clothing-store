const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail, update_User } = require("../service/user.service.js");

const createToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET);
};

const register = async (req, res) => {
  try {
    const { email, confirmPassword, password } = req.body;
    const existEmail = await findUserByEmail(email);

    if (existEmail) {
      return res
        .status(400)
        .json({ success: false, message: "User already exist" });
    }

    if (confirmPassword !== password) {
      return res
        .status(400)
        .json({ success: false, message: "error password" });
    }

    const user = await createUser(req.body);

    const token = createToken(user._id, user.role);

    res.status(201).json({ success: true, token });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existEmail = await findUserByEmail(email);

    if (!existEmail) {
      return res
        .status(400)
        .json({ success: false, message: "User doesn't exist" });
    }

    const isMatch = await bcrypt.compare(password, existEmail.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "wrong email or password" });
    }

    const token = createToken(existEmail._id, existEmail.role);
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    });
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "Error" });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (
      email !== process.env.Email_admin &&
      password !== process.env.Password_admin
    ) {
      return res
        .status(400)
        .json({ success: false, message: "you are not admin" });
    }
    const existEmail = await findUserByEmail(email);

    if (!existEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Admin doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, existEmail.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "wrong email or password" });
    }

    const token = createToken(existEmail._id, existEmail.role);
    res.cookie("token", token, {
      httpOnly: true,
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    });
    res.status(200).json({ success: true, token });
  } catch (error) {
    console.log(error);

    return res.status(500).json({ success: false, message: "Error" });
  }
};

const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  res.status(200).json({ success: true });
};

const changePassword = async (req, res) => {
  try {
    const { email, password, newPassword, confirmPassword } = req.body;

    const existEmail = await findUserByEmail(email);

    if (!existEmail) {
      return res
        .status(404)
        .json({ success: false, message: "User doesn't exist" });
    }
    const isMatch = await bcrypt.compare(password, existEmail.password);

    if (!isMatch) {
      return res
        .status(400)
        .json({ success: false, message: "wrong email or password" });
    }

    if (newPassword !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "wrong confirm password" });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(newPassword, salt);
    await update_User(existEmail._id,{password:hashPassword})
  
    res.status(200).json({ success: true, message: "changed password" });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error" });
  }
};

module.exports = { register, login, loginAdmin, logout, changePassword };
