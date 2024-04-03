const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const csurf = require('csurf');
const sql = require('mssql/msnodesqlv8');
const app = express();

const jwt = require('jsonwebtoken');
const secretKey = 'JWT_EXPRESS';

const cookieParser = require('cookie-parser');
app.use(cookieParser());

const port = 8080;

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(bodyParser.json());

const {
  getBlogs,
  getSingleBlog,
  addBlog,
  deleteBlog,
  updateBlog,
} = require('./routes/blog');
app.get('/blogs', getBlogs);
app.get('/blogs/:id', getSingleBlog);
app.post('/blogs', addBlog);
app.delete('/blogs/:id', deleteBlog);
app.put('/blogs/:id', updateBlog);

const getTrainers = require('./routes/trainers');
app.get('/trainers', getTrainers);

const getClasses = require('./routes/classes');
app.get('/classes', getClasses);

const { signup, login, logout } = require('./routes/auth');
app.post('/login', login);
app.post('/signup', signup);
app.post('/logout', logout);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../client/public/upload');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post('/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

// const sqlConfig = {
//   username: 'sa',
//   password: '1234',
//   server: 'localhost\\SQLEXPRESS',
//   database: 'high_street_gym',
//   driver: 'msnodesqlv8',
//   options: {
//     trustedConnection: true,
//   },
// };

app.post('/upload', upload.single('file'), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

// app.post('/logout', (req, res) => {
//   res
//     .clearCookie('token', {
//       sameSite: 'none',
//       secure: true,
//     })
//     .status(200)
//     .json('User has been logged out');
// });

//port listen
app.listen(port, function () {
  console.log(`Listening to port ${port}`);
});
