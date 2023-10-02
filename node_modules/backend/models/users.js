const Sequelize = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
    config.development.database,
    config.development.username,
    config.development.password,
    {
        dialect: config.development.dialect,
        host: config.development.host
    }
);

sequelize.authenticate()
  .then(() => {
    console.log('Koneksi ke database berhasil.');
  })
  .catch(err => {
    console.error('Koneksi ke database gagal:', err);
  });

const User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    },
});

module.exports = User;
