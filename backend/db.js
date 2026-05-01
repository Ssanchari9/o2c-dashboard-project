const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "your_password",
  database: "o2c_project",
});

module.exports = connection;
