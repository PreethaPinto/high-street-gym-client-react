const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const sql = require('mssql');
const app = express();
app.use(cors());
app.use(bodyParser.json());

//config for your database
const sqlConfig = {
  user: 'preethacp',
  password: 'Rf6PVyj7B8!PNcT',
  server: 'preethacp.database.windows.net',
  database: 'HIGHSTREETGYM',
};

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
    request.query('SELECT * from classes', (err, data) => {
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
      request.query('SELECT * from trainers', (err, data) => {
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

//Http GET for blogs
app.get('./blogs', (req, res) => {
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
      request.query('SELECT * from blogs', (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        //send data as response
        res.send(data);
      });
    });
  } catch (err) {
    res.send(err);
  }
});

//http POST for new members
app.post('/member', (req, res) => {
  try {
    //Connect to database
    sql.connect(sqlConfig, () => {
      const request = new sql.Request();

      const { firstName, lastName, phoneNumber, emailId, password } = req.body;

      let stringRequest = `INSERT INTO member(
      firstName,
      lastName,
      phoneNumber,
      emailId,
      password
      ) 

      OUTPUT Inserted.memberId 

      VALUES (
        @firstName,
        @lastName,
        @phoneNumber,
        @emailId,
        @password       
      )`;
      request.input('firstName', firstName);
      request.input('lastName', lastName);
      request.input('phoneNumber', phoneNumber);
      request.input('emailId', emailId);
      request.input('password', password);

      request.query(stringRequest, (err, data) => {
        if (err) {
          console.log(err);
          return;
        }

        res.send(JSON.stringify(data));
      });
    });
  } catch (err) {
    res.send(err);
  }
});

app.listen(8080, function () {
  console.log('Listening to port 8080');
});
