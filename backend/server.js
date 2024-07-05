const express = require('express');
const connectDB = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const app = express();
connectDB();

app.use(express.json({extended: false}))
app.use(cors());

app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})