const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const rateLimiter = require("./middleware/rate-limiter");

dotenv.config();

const app = express();

// middleware
app.use(express.json());
app.use(rateLimiter);

// routes
const userRoutes = require("./v1/components/users/users.routes");
app.use("/api/v1/users", userRoutes);

// health check
app.get("/", (req, res) => {
  res.send("API is running");
});

module.exports = app;



 

