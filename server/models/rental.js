const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TITLE_MAX_LENGTH = 128;
const STREET_MIN_LENGTH = 4;
const MODEL_NAME = 'Rental';

const rentalSchema = new Schema({
    title: {
        type: String,
        required: true,
        max: [TITLE_MAX_LENGTH, `The title should not increase ${TITLE_MAX_LENGTH} characters.`]
    },
    city: {
        type: String,
        required: true,
        lowercase: true,
    },
    street: {
        type: String,
        required: true,
        min: [TITLE_MAX_LENGTH, `The title should not be less then ${STREET_MIN_LENGTH} characters.`]
    },
    category: {
        type: String,
        required: true,
        lowercase: true
    },
    image: {
        type: String,
        required: true
    },
    bedrooms: Number,
    shared: Boolean,
    description: {
        type: String,
        required: true
    },
    dailyRate: Number,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model(MODEL_NAME, rentalSchema);