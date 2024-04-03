const sql = require('mssql/msnodesqlv8');
const sqlConfig = require('../db');
const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

// const userDataValidate = [
//   check('first_name').notEmpty().withMessage('First name is required'),
//   check('last_name').notEmpty().withMessage('Last name is required'),
//   check('phone_number')
//     .notEmpty()
//     .withMessage('Phone number should be 10 digits')
//     .isLength({
//       min: 10,
//       max: 10,
//     }),

//   check('email_id').isEmail().withMessage('Email is required'),
//   check('username').notEmpty().withMessage('Username is required'),
//   check('password', 'Password length should be 8 to 20 characters').isLength({
//     min: 8,
//     max: 20,
//   }),
// ];

// const signup =
//   (userDataValidate,
//   async (req, res) => {
//     try {
//       const errors = validationResult(req);
//       if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//       }

//       const {
//         first_name,
//         last_name,
//         phone_number,
//         email_id,
//         password,
//         username,
//       } = req.body;

//       // CHECK EXISTING MEMBER
//       const query = `SELECT * FROM member WHERE email_id = @emailId OR username = @username`;

//       const pool = await sql.connect(sqlConfig);
//       const result = await pool
//         .request()
//         .input('emailId', sql.NVarChar, email_id)
//         .input('username', sql.NVarChar, username)
//         .query(query);

//       if (result.recordset.length) {
//         return res.status(409).json({ error: 'User already exists' });
//       }

//       // Hash the password and create a user
//       const salt = bcrypt.genSaltSync(10);
//       const hash = bcrypt.hashSync(password, salt);

//       const insertQuery = `
//       INSERT INTO [member] (
//         first_name,
//         last_name,
//         phone_number,
//         email_id,
//         password,
//         username
//       )
//       OUTPUT Inserted.member_id
//       VALUES (
//         @firstName,
//         @lastName,
//         @phoneNumber,
//         @emailId,
//         @passwordHash,
//         @username
//       )`;

//       const insertResult = await pool
//         .request()
//         .input('firstName', sql.NVarChar, first_name)
//         .input('lastName', sql.NVarChar, last_name)
//         .input('phoneNumber', sql.NVarChar, phone_number)
//         .input('emailId', sql.NVarChar, email_id)
//         .input('passwordHash', sql.NVarChar, hash)
//         .input('username', sql.NVarChar, username)
//         .query(insertQuery);

//       res.json({ memberId: insertResult.recordset[0].member_id });
//     } catch (err) {
//       console.error('Error processing the request:', err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });

// module.exports = signup;
