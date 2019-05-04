const express = require('express');
const router = express.Router();
const Rental = require('../models/rental'); 

router.get('', (req, res) => {
    Rental.find({}, (error, foundRentals) => {
        res.json(foundRentals);
    }); 
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    Rental.findById(id, (error, foundRentals) => {
        if (error, !foundRentals) {
            res.status(422).send({ 
                errors: [
                    { status: 422, title: 'Rental Error', message: `Cannot find rental by ID equal ${id}` }
                ] 
            });
        }
        res.json(foundRentals);
    }); 
});


module.exports = router;