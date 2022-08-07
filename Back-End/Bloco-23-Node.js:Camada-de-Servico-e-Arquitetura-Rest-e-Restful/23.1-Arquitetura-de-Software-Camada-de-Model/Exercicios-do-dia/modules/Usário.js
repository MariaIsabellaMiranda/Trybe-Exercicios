const connection= require('./connection');

const createUser = async ({ firstName, lastName, email, password }) => {
  const query = 'INSERT INTO  model_example.user (firstName, lastName, email, password) VALUES (?, ?, ?, ?);'
  console.log('entrou aqui');
  const create = await connection.execute(query, [firstName, lastName, email, password]);
console.log(create);
};

module.exports = { createUser };