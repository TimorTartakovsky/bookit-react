const Rental = require('../models/rental'); 

exports.getAllRentals = function(req, res) {
    Rental.find({}, (error, foundRentals) => {
        res.json(foundRentals);
     });
}

exports.getRentalById = function(req, res) {
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
}