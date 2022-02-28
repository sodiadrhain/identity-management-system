const express = require("express");
const { register, login } = require("../controllers/userController");
const {
  registerValidator,
  loginValidator,
} = require("../validators/authValidator");

const router = express.Router();

router.route("/register").post(registerValidator, register);
router.route("/login").post(loginValidator, login);

module.exports = router;
