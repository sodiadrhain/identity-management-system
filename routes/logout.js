/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require("express");
const jwt = require("jsonwebtoken");
const config = require("config");
const middleware = require("../middleware");
const User = require("../models/User");
const logger = require("../utils/logger");

const router = express.Router();

router.route("/").get(middleware, async (req, res) => {
  const authHeader = req.headers["identity-auth-token"];
  try {
    const user = await User.findById(req.user.id);
    const payload = {
      user: {
        id: user.id,
      },
    };
    jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
      if (logout) {
        res.status(200).json({
          status: "success",
          message: "User logout successful.",
        });
      }
    });
  } catch (err) {
    logger.error(err.message);
    res
      .status(500)
      .json({ status: "error", message: "Internal server error." });
  }
});

module.exports = router;
