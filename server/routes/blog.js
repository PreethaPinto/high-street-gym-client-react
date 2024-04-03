const express = require('express');

const app = express();
const sql = require('mssql/msnodesqlv8');

const sqlConfig = require('../db');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

const secretKey = 'JWT_EXPRESS';

//GET Blogs
const getBlogs = async (req, res) => {
  try {
    //Connect to database
    const pool = await sql.connect(sqlConfig);

    // Create Request object
    const request = new sql.Request(pool);

    // Query the database
    const data = await request.query('SELECT * FROM blog');

    // Send data as response
    res.json(data.recordset);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

//GET Single Blog
const getSingleBlog = (req, res) => {
  //connect to database
  try {
    const id = req.params.id;
    sql.connect(sqlConfig, (err) => {
      if (err) {
        return err;
      }

      //create Request object
      let request = new sql.Request();

      let stringRequest = `SELECT blog_id, m.username, b.blog_title, b.blog_content, b.blog_image, b.date
                          FROM member m
                          INNER JOIN blog b ON m.member_id = b.member_id WHERE b.blog_id = ${id}`;

      request.query(stringRequest, (err, data) => {
        if (err) {
          res.status(500);
          res.send(err);
        }
        res.send(data.recordset);
      });
    });
  } catch (err) {
    res.send(err);
  }
};

// //ADD BLOG

const addBlog = async (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ error: 'Not authenticated!' });

    // Verify the JWT token using the correct secret key
    jwt.verify(token, secretKey, async (err, userInfo) => {
      if (err) {
        return res.status(403).json({ error: 'Token is not valid!' });
      }

      // The token is valid, and userInfo contains the decoded payload
      const userId = userInfo.id;

      try {
        // Create a Request object using the database connection pool
        const pool = await sql.connect(sqlConfig);
        const request = new sql.Request(pool);

        // SQL query with correct placeholders and parameterized values
        const stringRequest = `
          INSERT INTO blog(blog_title, blog_content, blog_image, date, member_id)
          VALUES (@title, @content, @image, @date, @userId);
        `;

        const insertResult = await request
          .input('title', sql.NVarChar, req.body.blog_title)
          .input('content', sql.NVarChar, req.body.blog_content)
          .input('image', sql.NVarChar, req.body.blog_image)
          .input('date', sql.NVarChar, req.body.date)
          .input('userId', sql.Int, userId)
          .query(stringRequest);

        res.json({ message: 'Blog created successfully' });
      } catch (err) {
        console.error('Error processing the request:', err);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
  } catch (err) {
    console.error('Error processing the request:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// //DELETE POST
const deleteBlog = (req, res) => {
  const blogId = req.params.id;

  // Verify the JWT token in the request header or cookie
  const token = req.headers.authorization || req.cookies.token;
  if (!token) return res.status(401).json({ error: 'Not authenticated!' });

  jwt.verify(token, secretKey, (err, userInfo) => {
    if (err) {
      // Token is not valid or has expired
      return res.status(403).json({ error: 'Token is not valid!' });
    }

    // The token is valid, and userInfo contains the decoded payload
    // Extract the user ID from userInfo.id
    const userId = userInfo.id;

    // Connect to the database
    const request = new sql.Request();

    // Execute the DELETE query with parameters
    const stringRequest =
      'DELETE FROM blog WHERE blog_id = @blogId AND member_id = @userId';
    request.input('blogId', sql.Int, blogId);
    request.input('userId', sql.Int, userId);

    request.query(stringRequest, (err, data) => {
      if (err) {
        return res.status(500).json({ error: 'Error deleting the post' });
      }

      // Check if any rows were affected by the delete query
      if (data.rowsAffected[0] === 0) {
        // The blog post was not found or the user is not authorized to delete it
        return res.status(404).json({
          error: 'Blog post not found or you are not authorized to delete it',
        });
      }

      // The blog post was successfully deleted
      return res.json({ message: 'Post has been deleted!' });
    });
  });
};

// //UPDATE BLOG
const updateBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const token = req.cookies.token;

    if (!token) return res.status(401).json({ error: 'Not authenticated!' });

    // Verify the JWT token using the correct secret key
    const userInfo = await jwt.verify(
      token,
      secretKey,
      async (err, userInfo) => {
        if (err) {
          return res.status(403).json({ error: 'Token is not valid!' });
        }

        // The token is valid, and userInfo contains the decoded payload
        const userId = userInfo.id;

        try {
          // Create a Request object using the database connection pool
          const pool = await sql.connect(sqlConfig);
          const request = new sql.Request(pool);

          // SQL query with correct placeholders and parameterized values
          const stringRequest = `
          UPDATE blog
          SET blog_title = @title, blog_content = @content, blog_image = @image
          WHERE blog_id = @blogId AND member_id = @userID;`;

          const insertResult = await request
            .input('title', sql.NVarChar, req.body.blog_title)
            .input('content', sql.NVarChar, req.body.blog_content)
            .input('image', sql.NVarChar, req.body.blog_image)
            .input('blogId', sql.Int, id)
            //.input('date', sql.NVarChar, req.body.date)
            .input('userId', sql.Int, userId)
            .query(stringRequest);

          res.json({ message: 'Blog created updated' });
        } catch (err) {
          console.error('Error processing the request:', err);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
    );
  } catch (err) {
    console.error('Error processing the request:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getBlogs, getSingleBlog, addBlog, deleteBlog, updateBlog };
