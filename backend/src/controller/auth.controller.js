const User = require("../model/user.model.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

const register = async (req, res) => {
  const { firstname, lastname, email, password, confirmPassword } = req.body;

  try {
    const existEmail = await User.findOne({ email });
    if (existEmail) {
      return res.json({ success: false, message: "User already exist" });
    }

    if (confirmPassword !== password) {
      return res.json({ success: false, message: "error password" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: hashPassword,
    });

    const user = await newUser.save();
    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const existEmail = await User.findOne({ email });
  if (!existEmail) {
    return res.json({ success: false, message: "User doesn't exist" });
  }

  const isMatch = await bcrypt.compare(password, existEmail.password);
  if (!isMatch) {
    return res.json({ success: false, message: "wrong email or password" });
  }

  const token = createToken(existEmail._id);

  res.json({success:true,token})

};

module.exports = { register,login };
