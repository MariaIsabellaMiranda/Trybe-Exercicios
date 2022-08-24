const getUsers = (req, res) => {
  const { data } = req.user;

  res.status(200).json({data})
};

module.exports = { getUsers };