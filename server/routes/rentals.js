const express = require('express');
const router = express.Router();
const rentalController = require('../controllers/rentals');
const userController = require('../controllers/user');

// router.get('', userController.authMiddleware, rentalController.getAllRentals);
// router.get('/:id', userController.authMiddleware, rentalController.getRentalById);

router.get('', rentalController.getAllRentals);
router.get('/:id', rentalController.getRentalById);


module.exports = router;