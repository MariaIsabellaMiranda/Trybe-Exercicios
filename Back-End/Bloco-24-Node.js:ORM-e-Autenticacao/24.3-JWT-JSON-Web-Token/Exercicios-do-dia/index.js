const express = require('express');
require('dotenv').config();
const loginController = require('./controllers/loginController');
const usersController = require('./controllers/users.Controller');
const validToken = require('./middlewares/auth');

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.post('/login', loginController.login);

app.get('/users/me', validToken.validToken, usersController.getUsers);

app.listen(PORT, () => {
  console.log(`Online na porta ${PORT}`)
});