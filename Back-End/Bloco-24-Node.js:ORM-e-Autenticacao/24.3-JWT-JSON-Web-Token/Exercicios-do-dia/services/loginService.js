const tokenHelper = require('../helpers/tokenHelper');

const login = (username, password) => {
  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  if (!username, !password) return {code: 401, message: 'Dados não informados'};

  if (username.length < 5) return {code: 401, message: 'Dados não inválidos'};

  if (typeof password ==! 'string' || password.length < 5) return {code: 401, message: 'Dados não inválidos'};

  const token = tokenHelper.createToken(username, admin);

  return { code: 201, data: token };
};

module.exports = { login };