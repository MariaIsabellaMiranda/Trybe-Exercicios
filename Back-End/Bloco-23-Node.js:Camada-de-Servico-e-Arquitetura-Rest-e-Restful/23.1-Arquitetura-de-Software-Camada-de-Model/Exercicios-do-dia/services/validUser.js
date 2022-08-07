const validFullName = (req, res, next) => {
 const { firstName, lastName } = req.body;

 if(!firstName) return res.status(400).json({ "message": "\"firstName\" length must be at least 6 characters long" });

 if(!lastName) return res.status(400).json({ "message": "\"lastName\" length must be at least 6 characters long" });

 next();
};

const validEmail = (req, res, next) => {
  const { email } = req.body;
 
  if(!email) return res.status(400).json({ "message": "\"email\" length must be at least 6 characters long" });
 
  next();
 };

 const validPassword = (req, res, next) => {
  const { password } = req.body;
 
  if(!password || typeof password !== 'string' || password < 6) {
    return res.status(400).json({ "message": "\"email\" length must be at least 6 characters long" });
  }
 
  next();
 };

 module.exports = {
  validFullName,
  validEmail,
  validPassword
 }