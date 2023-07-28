const sql = require('mssql/msnodesqlv8');
const sqlConfig = require('../db');

const getTrainers = async (req, res) => {
  try {
    // Create a connection pool
    const pool = await new sql.ConnectionPool(sqlConfig).connect();

    // Create a new Request object using the pool
    const request = pool.request();

    // Query the database using the Request object
    const data = await request.query('SELECT * FROM trainer');

    // Release the connection back to the pool
    pool.close();

    // Send the data as response
    res.send(data.recordset);
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = getTrainers;
