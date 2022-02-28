const mongoose = require("mongoose");
const config = require("config");
const logger = require("../utils/logger");

const db = config.get("mongodbUrl");

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.log("Database connection has been established successfully");
  } catch (error) {
    logger.error("Unable to connect to the database:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
