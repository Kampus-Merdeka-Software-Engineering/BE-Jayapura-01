const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

// Endpoint Register
exports.register = async (req, res) => {
    const {
        username,
        email,
        password
    } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({
            error: 'Data is incomplete. Please fill in all required fields.'
        });
    }
    // Mengecek apakah email sudah terdaftar
    const existingUser = await User.findOne({
        where: {
            email
        }
    });

    if (existingUser) {
        return res.status(400).json({
            error: 'Email sudah terdaftar!'
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const newUser = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        res.json(newUser);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Gagal mengambil data pengguna!'
        });
    }
};

// Endpoint Login
exports.login = async (req, res) => {
    const {
        username, 
        password
    } = req.body;

    try {
        const user = await User.findOne({
            where: {
                username 
            }
        });

        if (!user) {
            return res.status(404).json({
                error: 'Pengguna tidak ditemukan!'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (isPasswordValid) {
            // Jika kata sandi benar, buat token untuk otentikasi
            const token = jwt.sign({
                userId: user.id
            }, 'rahasia', {
                expiresIn: '1h'
            });

            res.json({
                token
            });
        } else {
            res.status(401).json({
                error: 'Kata sandi tidak valid!'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: 'Login gagal!'
        });
    }
};
//Endpoint Logout
exports.logout = async(req, res) => {
    const tokenToRevoke = req.token;
    revokedToken.push(tokenToRevoke);
    console.log("User has been logged out!");
    res.json({
        message: "User has been logged out!"
    });
};