const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");

const credentials = {
  username: 'root',
  password: '',
  database: 'aiven_db',
  host: 'localhost',
  port: 3306,
  ssl: {
    ca: fs.readFileSync(path.join(__dirname, 'group1.pem')),
  }
};

const conn = new Sequelize(credentials.database, credentials.username, credentials.password, {
  host: credentials.host,
  port: credentials.port,
  dialect: 'mysql',
  dialectOptions: {
    ssl: {
      ca: credentials.ssl.ca,
      rejectUnauthorized: false 
    }
  },
  logging: false,
});

module.exports = {
  conn,
};
