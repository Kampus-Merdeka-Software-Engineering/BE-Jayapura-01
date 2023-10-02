const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const cors = require('cors');
const corsOptions = {
    origin: 'http://127.0.0.1:8080', // Ganti sesuai domain frontend Anda
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
  };

app.use(cors(corsOptions));
app.use(express.json());
app.use('/auth', authRoutes);

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
});
