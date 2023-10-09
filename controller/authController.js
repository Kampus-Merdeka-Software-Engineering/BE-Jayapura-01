const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");


module.exports = {
  register: async (req, res, next) => {
    if (
      req.body.username === "" ||
      req.body.password === "" ||
      req.body.email === ""
    ) {
      res.status(400).json({
        message: "EMPTY FIELD",
      });
      return;
    }

    try {
      const saltRounds = 10;
      // Hash password menggunakan bcrypt
      const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

      // Simpan data pengguna ke database, termasuk password yang sudah di-hash
      const userData = {
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword, // Password yang sudah di-hash
      };

      const data = await User.create(userData);

      res.status(201).json({
        message: "User berhasil terdaftar",
        data: data,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: err,
      });
    }
  },

  login: async (req, res, next) => {
    if (req.body.username === "" || req.body.password === "") {
      res.status(400).json({
        message: "EMPTY FIELD",
      });
      return;
    }

    try {
      const userData = await User.findOne({
        where: {
          username: req.body.username,
        },
      });

      if (!userData) {
        res.status(401).json({
          message: "Login failed. Invalid credentials.",
        });
        return;
      }

      // Membandingkan password yang diterima dengan hash password di database
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        userData.password
      );

      if (passwordMatch) {
        const token = jwt.sign(
          { userId : userData.id },'secret', {expiresIn: '1h'} 
        );
        console.log("Token: ",token);
        res.status(200).json({
          message: "Success login",
          data: {
            user: userData, 
            token: token, 
          },
        });
      } else {
        res.status(401).json({
          message: "Login failed. Invalid credentials.",
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({
        message: err,
      });
    }
  },
};
