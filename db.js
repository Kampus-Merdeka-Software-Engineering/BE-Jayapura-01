const sequelize = require("sequelize");
const mysql = require("mysql2");
const fs = require("fs");
const path = require("path");

const conn = new sequelize.Sequelize(
  "ini diganti dengan link dari aiven atau app sejenis",
  {
    ssl: fs.readFileSync(path.join(__dirname, "group1.pem")),
    dialect: "mysql",
    logging: false,
  }
);

module.exports = {
  conn,
};
