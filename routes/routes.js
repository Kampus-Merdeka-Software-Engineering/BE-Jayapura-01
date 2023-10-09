const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const productController = require("../controller/productController");

//Route registrasi user
router.post("/register", authController.register);

//Route login user
router.post("/login", authController.login);

//Route untuk products
router.get("/products", productController.getAllProduct);

module.exports = router;
