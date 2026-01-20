const express = require("express");
const userRoutes = require("../../v1/components/users/users.routes");

const router = express.Router();

router.use("/users", userRoutes);

module.exports = router;
