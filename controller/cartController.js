const {
  Cart
} = require("../models/cart");
const jwt = require("jsonwebtoken");
const db = require("../db");

module.exports = {
  checkout: async (req, res) => {
    try {
      // Dapatkan data keranjang dari body request
      const { items } = req.body;
      //Validasi token
      const token = req.headers.authorization.split(' ')[1];
      const decodedToken = jwt.verify(token, 'secret');
      const userId = decodedToken.userId;

      // Hitung total harga dari item-item dalam keranjang
      const totalHarga = items.reduce((total, item) => {
        if (typeof item.itemPrice === 'number' && typeof item.quantity === 'number' && item.itemPrice > 0 && item.quantity > 0) {
          return total + (item.itemPrice * item.quantity);
        } else {
          throw new Error('Harga / Quantity tidak valid');
        }
      }, 0);

      // Ambil array dari item-item yang valid
      const nama_barang = items.map(item => item.productName).join(', '); 
      const harga = items.map(item => item.itemPrice).join(', '); 
      const product_id = items.map(item => item.productId).join(', '); 

      const cart = new Cart({
        nama_barang: nama_barang,
        harga: harga,
        total_harga: totalHarga,
        userid: userId,
        product_id: product_id,
      });

      await cart.save();

      res.status(201).json({
        message: 'Checkout berhasil!',
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: 'Terjadi kesalahan saat checkout.',
      });
    }
  },
};
