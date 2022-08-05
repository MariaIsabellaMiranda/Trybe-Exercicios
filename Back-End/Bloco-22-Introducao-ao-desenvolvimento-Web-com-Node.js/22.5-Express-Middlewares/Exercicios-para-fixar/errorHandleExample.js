const express = require('express');
const rescue = require('express-rescue');
const fs = require('fs/promises');
const errorMiddleware = require('./errorMiddleware');

const app = express();

// app.get('/:fileName', async (req, res, next) => {
// 	try {
// 		const file = await fs.readFile(`./${req.params.fileName}`);
// 		res.send(file.toString('utf-8'));
// 	} catch (e) {
// 		next(e);
// 	}
// });

// app.get(
//   '/:fileName',
//   rescue(async (req, res) => {
//     const file = await fs.readFile(`./${req.params.fileName}`);
//     res.send(file.toString('utf-8'));
//   })
// );

app.get('/:fileName', [
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  }),
  (err, req, res, next) => {
    if (err.code === 'ENOENT') {
      const newError = new Error(err.message);
      newError.code = 'file_not_found';
      newError.status = 404;
      return next(newError);
    }

    return next(err);
  },
]);

app.use(errorMiddleware);

// app.use((err, req, res, next) => {
//   res.status(500).json({ error: `Erro: ${err.message}` });
// });

app.listen(3002);
