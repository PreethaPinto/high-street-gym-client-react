const sql = require('mssql/msnodesqlv8');

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

module.exports = sqlConfig;
