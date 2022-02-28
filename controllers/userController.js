/* eslint-disable consistent-return */
const User = require("../models/User");
const logger = require("../utils/logger");

/**
 * @desc   Get authenticated user with acess token
 * @route  GET /api/user
 * @access Private
 */
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.status(200).json({
      status: "success",
      data: user,
      message: "User data fetched successfully.",
    });
  } catch (err) {
    logger.error(err.message);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
};

// /**
//  * @desc   Get All User
//  * @route  GET /api/user
//  * @access Private
//  */
//  exports.getUsers = (req, res) => {
//     res.json('djdjdj')
// }

/**
 * @desc   Update User
 * @route  PUT /api/user
 * @access Private
 */
exports.updateUser = async (req, res) => {
  try {
    const { fullName, birthDate } = req.body;
    const userUpdate = await User.findByIdAndUpdate(req.user.id, {
      $set: { fullName, birthDate },
    }).select("-password");
    res.status(200).json({
      status: "success",
      data: userUpdate,
      message: "Update data is successful.",
    });
  } catch (err) {
    logger.error(err.message);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
};
