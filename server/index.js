const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');

const rentalRoutes = require('./routes/rentals'); 

const app = express();
const PORT = process.env.PORT || 3001;
const API_PREFIX = '/api/v1';

mongoose.connect(config.DB_URI, config.MONGOOSE_CONFIG);

app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST, PUT");
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');
    //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); 
});

app.use(`${API_PREFIX}/rentals`, rentalRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
});
