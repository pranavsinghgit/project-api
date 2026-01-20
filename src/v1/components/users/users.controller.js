const userService = require("./users.service");

const register = async (req, res) => {
  try {
    const user = await userService.registerUser(
      req.body.email,
      req.body.password
    );
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const result = await userService.loginUser(
      req.body.email,
      req.body.password
    );
    res.json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

module.exports = { register, login };
