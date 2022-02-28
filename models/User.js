const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
  },
  birthDate: {
    type: Date,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  lastLogin: {
    type: Date,
  },
});

module.exports = mongoose.model("User", userSchema);
