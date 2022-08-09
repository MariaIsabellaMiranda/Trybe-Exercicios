const express = require('express');
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.get('/ping', (req, res) => {

  res.status(200).json({ "message": "pong!" });
});
  
app.get('/cep/:cep', (req, res) => {
  const { cep } = req.params;

  res.status(200).json({ "message": "pong!" });
});

app.listen(PORT, () => console.log('Porta 3001 online'));