const tokenHelper = require('../helpers/tokenHelper');

const validToken = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  
  try {
    const data = tokenHelper.verifyToken(authorization);
    console.log('data,auth:', data);

      req.user = data;

      next();
  } catch(err) {
    console.log("aqui");
    res.status(401).json({ error: { message: err }});
  }
};

module.exports = { validToken };