const { Sequelize, DataTypes } = require("sequelize");
const conn = require("../db").conn; // Import koneksi database

const Cart = conn.define("Cart", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama_barang: { 
    type: DataTypes.STRING,
    allowNull: false,
  },
  harga: { 
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0, // Validasi harga harus positif
    },
  },
  total_harga: { 
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0, 
      isDecimal: true, 
    },
  },
  userid: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "user", 
      key: "id",
    },
  },
  product_id: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Product",
      key: "id",
    },
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    allowNull: false,
  },
});

module.exports = {
  Cart,
};
