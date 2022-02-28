const express = require("express");
const { getUser, updateUser } = require("../controllers/userController");
const middleware = require("../middleware");
const { updateProfileValidator } = require("../validators/userValidator");

const router = express.Router();

router.route("/").get(middleware, getUser);
router.route("/").put(middleware, updateProfileValidator, updateUser);

module.exports = router;
