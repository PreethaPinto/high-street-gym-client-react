const express = require('express');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const sql = require('mssql/msnodesqlv8');
const app = express();

const xml = require('xmlbuilder');

const bcrypt = require('bcrypt');
const saltRounds = 10;

const port = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

require('dotenv').config();

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  //check json web token exists and is verified
  if (token) {
    jwt.verify(token);
  } else {
    res.redirect('./login');
  }
};

//config for database
const sqlConfig = {
  username: 'sa',
  password: '1234',
  server: 'localhost\\SQLEXPRESS',
  database: 'high_street_gym',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
  },
};

//Http GET for trainers
app.get('/trainers', (req, res) => {
  //connect to your database

  try {
    sql.connect(sqlConfig, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      //create Request Object
      const request = new sql.Request();

      //query to database
      request.query('SELECT * from trainer', (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        //send data as a response
        res.send(data.recordset);
      });
    });
  } catch (err) {
    res.send(err);
  }
});

//Http GET for classes
app.get('/classes', (req, res) => {
  //connect to database
  try {
    sql.connect(sqlConfig, (err) => {
      if (err) {
        console.log(err);
        return;
      }
    });

    //create Request object
    const request = new sql.Request();

    //query to database
    request.query('SELECT * from class', (err, data) => {
      if (err) {
        console.log(err);
        return;
      }

      //send the data as response
      res.send(data.recordset);
    });
  } catch (err) {
    res.send(err);
  }
});

//Http GET for blogs
app.get('/blogs', (req, res) => {
  try {
    //connect to database
    sql.connect(sqlConfig, (err) => {
      if (err) {
        console.log(err);
        return;
      }

      //create Request object
      const request = new sql.Request();

      //query to database
      request.query('SELECT * from blog', (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        //send data as response
        res.send(data.recordset);
      });
    });
  } catch (err) {
    res.send(err);
  }
});

//Http GET for blog detail page
// app.get('/blogs/:id', (req, res) => {
//   //connect to database
//   try {
//     const id = req.params.id;
//     sql.connect(sqlConfig, (err) => {
//       if (err) {
//         console.log(err);
//         return;
//       }

//       //create Request object
//       let request = new sql.Request();

//       let stringRequest = `Select * from blog where blog_id = ${id}`;

//       request.query(stringRequest, (err, data) => {
//         if (err) {
//           res.status(500);
//           res.send(err);
//         }
//         res.send(data.recordset);
//         console.log(data.recordset);
//       });
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

const userDataValidate = [
  body('first_name').notEmpty().withMessage('First name is required'),
  body('last').notEmpty().withMessage('Last name is required'),
  body('phone').custom((value) => {
    if (value.length !== 10) {
      throw new Error('Phone number should be 10 digits');
    } else {
      return true;
    }
  }),
  body('email_id')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6, max: 10 }),
  body('username').notEmpty().withMessage('Username is required'),
  body('confirm_password').custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error('Passwords must match');
    }
    return true;
  }),
];

app.post('/signup', async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      phone_number,
      email_id,
      password,
      username,
    } = req.body;

    // CHECK EXISTING MEMBER
    const query = `SELECT * FROM member WHERE email_id = @emailId OR username = @username`;

    const pool = await sql.connect(sqlConfig);
    const result = await pool
      .request()
      .input('emailId', sql.NVarChar, email_id)
      .input('username', sql.NVarChar, username)
      .query(query);

    if (result.recordset.length) {
      return res.status(409).json({ error: 'User already exists' });
    }

    // Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const insertQuery = `
      INSERT INTO [member] (
        first_name,
        last_name,
        phone_number,
        email_id,
        password,
        username
      )
      OUTPUT Inserted.member_id
      VALUES (
        @firstName,
        @lastName,
        @phoneNumber,
        @emailId,
        @passwordHash,
        @username
      )`;

    const insertResult = await pool
      .request()
      .input('firstName', sql.NVarChar, first_name)
      .input('lastName', sql.NVarChar, last_name)
      .input('phoneNumber', sql.NVarChar, phone_number)
      .input('emailId', sql.NVarChar, email_id)
      .input('passwordHash', sql.NVarChar, hash)
      .input('username', sql.NVarChar, username)
      .query(insertQuery);

    res.json({ memberId: insertResult.recordset[0].member_id });
  } catch (err) {
    console.error('Error processing the request:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

//

// app.post('/signup', async (req, res) => {
//   try {
//     const {
//       first_name,
//       last_name,
//       phone_number,
//       email_id,
//       password,
//       username,
//     } = req.body;

//     // Convert the signup data to XML format
//     const xmlData = xml({
//       member: {
//         first_name,
//         last_name,
//         phone_number,
//         email_id,
//         password,
//         username,
//       },
//     }).end({ pretty: true });

//     // Replace sqlConfig with your actual SQL Server configuration
//     sql.connect(sqlConfig, (err) => {
//       if (err) {
//         console.log('There was an error connecting to the database', err);
//         return res.status(500).json({ error: 'Internal Server Error' });
//       }

//       const request = new sql.Request();

//       const stringRequest = `
//         INSERT INTO [member] (
//           first_name,
//           last_name,
//           phone_number,
//           email_id,
//           password,
//           username
//         )
//         OUTPUT Inserted.member_id
//         VALUES (
//           @first_name,
//           @last_name,
//           @phone_number,
//           @email_id,
//           @password,
//           @username
//         )`;

//       request.input('first_name', first_name);
//       request.input('last_name', last_name);
//       request.input('phone_number', phone_number);
//       request.input('email_id', email_id);
//       request.input('password', password);
//       request.input('username', username);

//       request.query(stringRequest, (err, data) => {
//         if (err) {
//           console.log('There was an error executing the query', err);
//           return res.status(500).json({ error: 'Internal Server Error' });
//         }

//         res.send(data);
//       });
//     });
//   } catch (err) {
//     res.send(err);
//   }
// });

app.post('/login', async (req, res) => {
  try {
    // const { username, password } = req.body;

    // Connect to the database
    const pool = await sql.connect(sqlConfig);

    // Prepare the SQL query with parameterized query
    const query = `SELECT * FROM member WHERE username = @username`;
    const result = await pool
      .request()
      .input('username', sql.NVarChar, req.body.username)
      .query(query);

    if (result.recordset.length === 0) {
      return res.status(404).json({ message: 'User not found!' });
    }

    const user = result.recordset[0];
    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ message: 'Wrong username/password combination!' });
    }

    const { password, ...other } = user;
    // Generate and sign the JWT token
    const token = jwt.sign({ id: user.member_id }, 'JWT_SECRET', {
      expiresIn: '1h',
    });

    res
      .cookie('token', token, {
        httpOnly: true,
      })
      .status(200)
      .json({ other, token });

    return res.redirect('/');

    // res.json({
    //   // username: user.username,
    //   accessToken,
    // });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/logout', (req, res) => {
  try {
  } catch (err) {
    console.log('Error: ', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, function () {
  console.log(`Listening to port ${port}`);
});
