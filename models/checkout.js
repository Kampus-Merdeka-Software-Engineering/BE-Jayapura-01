
const { DataTypes } = require("sequelize");
const conn = require("../db").conn; // Import koneksi database

const Checkout = conn.define(
  "Checkout",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
    totalAmount: { type: DataTypes.DECIMAL(10, 0), allowNull: false },
    address: { type: DataTypes.STRING, allowNull: false },
    paymentMethod: { type: DataTypes.STRING, allowNull: false },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = {
  Checkout,
};

