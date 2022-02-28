/* eslint-disable consistent-return */
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../models/User");
const logger = require("../utils/logger");

/**
 * @desc   Register User
 * @route  POST /api/auth/register
 * @access Public
 */
exports.register = async (req, res) => {
  const { email, password, isAdmin } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ status: "error", message: "User already exists." });
    }

    user = new User({
      email,
      password,
      isAdmin,
    });

    // hash user password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    // create user
    await user.save();
    res
      .status(200)
      .json({ status: "success", message: "User created successfully" });
  } catch (err) {
    logger.error(err.message);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
};

/**
 * @desc   Register User
 * @route  POST /api/auth/login
 * @access Public
 */
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      res.status(404).json({ status: "error", message: "User not found." });
    const decode = await bcrypt.compare(password, user.password);
    if (!decode)
      res
        .status(400)
        .json({ status: "error", message: "Invalid credentials." });
    const payload = {
      user: {
        id: user.id,
      },
    };

    // generate user token and start user session
    jwt.sign(
      payload,
      config.get("jwtSecret"),
      { expiresIn: 3600 },
      (err, data) => {
        if (err)
          return res
            .status(400)
            .json({ status: "error", message: "An error occured try again." });
        res.status(200).json({
          status: "success",
          message: "User login successful.",
          access_token: data,
        });
      }
    );

    // generate and user lastLogin
    const lastLogin = Date.now();
    await User.findByIdAndUpdate(user.id, { $set: { lastLogin } });
  } catch (err) {
    logger.error(err.message);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
};
