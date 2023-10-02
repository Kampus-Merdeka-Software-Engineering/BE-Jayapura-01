const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');


//Endpoint register
router.post('/register', authController.register);

//Endpoint login
router.post('/login', authController.login);

//Endpoint logout
router.get('/logout',authController.logout);

module.exports = router;