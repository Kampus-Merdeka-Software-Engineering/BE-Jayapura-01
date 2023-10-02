const Sequelize = require('sequelize');
const sequelize = require('../config');

const Product = sequelize.define('products', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  category: {
    type: Sequelize.STRING,
  },
  imageSrc: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
  },
});

module.exports = Product;
