const express = require("express");
const { getUsers, updateUser } = require("../controllers/adminController");
const middleware = require("../middleware");
const { updateProfileValidator } = require("../validators/adminValidator");

const router = express.Router();

router.route("/users/:id").put(middleware, updateProfileValidator, updateUser);
router.route("/users").get(middleware, getUsers);

module.exports = router;
