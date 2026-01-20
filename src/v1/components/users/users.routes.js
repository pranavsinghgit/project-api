const express = require("express");
const userController = require("./users.controller");
const authHandler = require("../../../middleware/auth-handler");

const router = express.Router();

// public routes
router.post("/register", userController.register);
router.post("/login", userController.login);

// protected route (any logged-in user)
router.get("/profile", authHandler, (req, res) => {
  res.json({
    message: "User profile",
    user: req.user
  });
});

// admin-only route (authorization)
router.get("/admin", authHandler, (req, res) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }

  res.json({ message: "Welcome Admin" });
});

module.exports = router;


