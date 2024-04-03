const sql = require('mssql/msnodesqlv8');

const sqlConfig = {
  username: '',
  password: '',
  server: '',
  database: 'high_street_gym',
  driver: 'msnodesqlv8',
  options: {
    trustedConnection: true,
  },
};

module.exports = sqlConfig;
