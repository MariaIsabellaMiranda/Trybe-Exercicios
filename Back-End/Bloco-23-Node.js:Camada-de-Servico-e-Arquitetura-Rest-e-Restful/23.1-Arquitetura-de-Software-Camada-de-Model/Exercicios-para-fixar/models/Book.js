const connection = require('./connection');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id
});

const getAll = async () => {
  const [books] = await connection.execute('SELECT id, title, author_id FROM model_example.books;');
  return books.map(serialize);
};


const getByAuthorId = async (authorId) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE author_id = ?;';
  const [booksIdAuthor] = await connection.execute(query, [authorId]);
  return booksIdAuthor.map(serialize);
};

const getById = async (id) => {
  const query = 'SELECT id, title, author_id FROM model_example.books WHERE id = ?;';
  const [bookId] = await connection.execute(query, [id]);

  if (bookId.length === 0) return null;

  return bookId.map(serialize)[0];
};

const validBook = async (req, res, next) => {
  if (!title || title.length < 3 || typeof title !== 'string') return false;
  if (!author_id || !await getByAuthorId(author_id) || typeof author_id !== 'number') return false;

  return true;
};

const createBok = async (title, author_id) => {
  const query = 'INSERT INTO model_example.books (title, author_id) VALUES (?, ?);'
  await connection.execute(query, [title, author_id]);
};

module.exports = {
  getAll,
  getByAuthorId,
  getById,
  validBook,
  createBok
};