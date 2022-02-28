const express = require("express");
const { getUser, updateUser } = require("../controllers/userController");
const middleware = require("../middleware");
const { updateProfileValidator } = require("../validators/userValidator");

const router = express.Router();

router.route("/:id").put(middleware, updateProfileValidator, updateUser);
router.route("/").get(middleware, getUser);

module.exports = router;
