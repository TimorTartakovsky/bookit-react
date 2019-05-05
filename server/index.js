const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const bodyParser = require('body-parser');
const rentalRoutes = require('./routes/rentals'); 
const userRoutes = require('./routes/users'); 
const app = express();

const PORT = process.env.PORT || 3001;
const API_PREFIX = '/api/v1';

app.use(bodyParser.json());

mongoose.connect(config.DB_URI, config.MONGOOSE_CONFIG);

app.use(`${API_PREFIX}/rentals`, rentalRoutes);
app.use(`${API_PREFIX}/users`, userRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
