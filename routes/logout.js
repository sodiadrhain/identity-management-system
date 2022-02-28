/* eslint-disable no-unused-vars */
/* eslint-disable consistent-return */
const express = require("express");
const middleware = require("../middleware");

const router = express.Router();

router.route("/", middleware, (req, res) => {
  req.user.deleteToken(req.token, (err, user) => {
    if (err)
      return res
        .status(400)
        .json({ status: "error", message: "An error occured try again." });
    res.status(200).json({
      status: "success",
      message: "User logout successful.",
    });
  });
});

module.exports = router;
