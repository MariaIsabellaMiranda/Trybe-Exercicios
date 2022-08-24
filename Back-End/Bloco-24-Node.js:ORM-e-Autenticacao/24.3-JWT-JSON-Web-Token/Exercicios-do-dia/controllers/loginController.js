const loginService = require('../services/loginService');

const login = (req, res) => {
  const { username, password } = req.body;

  const {code, data, message} = loginService.login(username, password);

  if (!data) return res.status(code).json(message);

  return res.status(code).json(data);
};

module.exports = { login };