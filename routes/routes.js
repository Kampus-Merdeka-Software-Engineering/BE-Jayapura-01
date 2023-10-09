const express = require('express');
const router = express.Router();
const authController = require("../controller/authController");
const productController = require("../controller/productController");
const cartController = require("../controller/cartController");

//Route registrasi user
router.post("/register", authController.register);

//Route login user
router.post("/login", authController.login);

//Route untuk products
router.get("/products", productController.getAllProduct);

//Route untuk cart
router.post("/checkout", cartController.checkout);


module.exports = router;