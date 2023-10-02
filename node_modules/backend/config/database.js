const Sequelize = require('sequelize');

const Sequelize = new Sequelize('Coffein', 'Development', 'Dev001', {
    host: 'localhost',
    dialect : 'mysql',
});

module.exports = Sequelize;