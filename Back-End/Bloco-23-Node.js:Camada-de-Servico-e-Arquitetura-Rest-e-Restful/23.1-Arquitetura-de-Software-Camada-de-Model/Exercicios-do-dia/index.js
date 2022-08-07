const express = require('express');
const { createUser } = require('./modules/Usário');
const {
  validFullName,
  validEmail,
  validPassword
 } = require('./services/validUser');

const app = express();
app.use(express.json);

app.post('/user',
validFullName,
validEmail,
validPassword, async (req, res) => {
  const returnCreated = await createUser(req.body);

  res.status(201).json({ testando: "teste 1" });
});

const PORT = 3000;
app.listen(PORT, () => { console.log(`App listening on port ${PORT}`); });