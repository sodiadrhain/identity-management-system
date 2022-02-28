const express = require("express");
const connectDB = require("./config/db");
const logger = require("./utils/logger");
const auth = require("./routes/auth");
const user = require("./routes/user");
const admin = require("./routes/admin");
const logout = require("./routes/logout");

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to Database
connectDB();

// Initialize express for middleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.status(200).json({
    message: "Welcome to the Identity Management System API...",
  })
);

// Imported routes
// Auth route
app.use("/api/auth", auth);
// User route
app.use("/api/user", user);
// Admin route
app.use("/api/admin", admin);
// Logout route
app.use("/api/logout", logout);

// Error route
app.all("*", (req, res) => {
  res.status(404).json({
    error: "Route not found",
  });
});

const server = app.listen(PORT, () => {
  logger.log(`Server is running on port ${PORT}`);
});

module.exports = server;
