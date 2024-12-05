const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "149.129.223.87",
  user: "admin_fms",
  password: "P@ssw0rd.1",
  database: "admin_dbfms",
  port: 3306
});

module.exports = pool.promise();