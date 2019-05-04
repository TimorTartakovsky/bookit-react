const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');

const rentalRoutes = require('./routes/rentals'); 

const app = express();
const PORT = process.env.PORT || 3001;
const API_PREFIX = '/api/v1';

mongoose.connect(config.DB_URI, config.MONGOOSE_CONFIG);

app.use(`${API_PREFIX}/rentals`, rentalRoutes);

app.listen(PORT, () => {
    console.log('Server is listening on port: 3001');
});
