const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const productController = require("../controller/productController");

router.post("/register", authController.register);

router.post("/login", authController.login);

router.get("/products", productController.getAllProduct);

module.exports = router;
