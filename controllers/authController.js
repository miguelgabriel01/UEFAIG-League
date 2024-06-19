const authService = require('../services/authService');

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { token } = await authService.login({ email, password });
    res.send({ token });
  } catch (err) {
    res.status(400).send(err.message);
  }
};

const register = async (req, res) => {
  try {
    const coach = await authService.register(req.body);
    res.send(coach);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

module.exports = { login, register };
