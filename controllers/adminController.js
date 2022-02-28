/* eslint-disable consistent-return */
const User = require("../models/User");
const logger = require("../utils/logger");

/**
 * @desc   Get all users
 * @route  GET /api/admin/users
 * @access Private
 */
exports.getUsers = async (req, res) => {
  try {
    const user = await User.find().sort({ date: -1 });
    res.status(200).json({
      status: "success",
      data: user,
      message: "Users fetched successfully.",
    });
  } catch (err) {
    logger.error(err.message);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
};

/**
 * @desc   Update Usera
 * @route  PUT /api/admin/users
 * @access Private
 */
exports.updateUser = async (req, res) => {
  try {
    const { fullName, birthDate, isAdmin } = req.body;
    const userUpdate = await User.findByIdAndUpdate(req.params.id, {
      $set: { fullName, birthDate, isAdmin },
    }).select("-password");
    res.status(200).json({
      status: "success",
      data: userUpdate,
      message: "Updated user successfully.",
    });
  } catch (err) {
    logger.error(err.message);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
};
