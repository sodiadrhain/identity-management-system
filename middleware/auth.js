const jwt = require("jsonwebtoken");
const config = require("config");
const logger = require("../utils/logger");

// eslint-disable-next-line consistent-return
export default (req, res, next) => {
  const header = req.header("identity-auth-token");
  if (!header)
    return res.status(400).json({ message: "Unauthorized, No Token" });
  try {
    const decoded = jwt.verify(header, config.get("jwtSecret"));
    if (!decoded) res.status(404).json({ message: "Invalid access token" });
    req.user = decoded.user;
    next();
  } catch (err) {
    logger.error(err.message);
    return res.status(500).json({ message: "Server Error" });
  }
};
