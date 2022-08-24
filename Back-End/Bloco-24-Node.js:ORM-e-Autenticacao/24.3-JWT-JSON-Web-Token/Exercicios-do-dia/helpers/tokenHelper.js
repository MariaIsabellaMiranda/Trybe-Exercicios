const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET_TOKEN = process.env.SECRET_TOKEN;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const createToken = (username, admin) => {
  const token = jwt.sign({ username, admin }, SECRET_TOKEN, jwtConfig);

  return { token };
};

const verifyToken = (authorization) => {
  console.log('verifyToken:', data);
    const data = jwt.verify(authorization, SECRET_TOKEN);
    return data;
};

module.exports = { createToken, verifyToken };