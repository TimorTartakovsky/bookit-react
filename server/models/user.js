const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const MODEL_NAME = 'User';
const USERNAME_MIN = 4;
const USERNAME_MAX = 32;

const EMAIL_MIN = 7;
const EMAIL_MAX = USERNAME_MAX;

const PASSWORD_MIN = 8;
const PASSWORD_MAX = USERNAME_MAX;

const userSchema = new Schema({
    username: {
        type: String,
        min: [USERNAME_MIN, `The username parameter should not be less then ${USERNAME_MIN} characters`],
        max: [USERNAME_MAX, `The username parameter should not be more then ${USERNAME_MAX} characters`],
        required: true,
    },
    email: {
        type: String,
        min: [USERNAME_MIN, `The email parameter should not be less then ${EMAIL_MIN} characters`],
        max: [USERNAME_MAX, `The email parameter should not be more then ${EMAIL_MAX} characters`],
        unique: true,
        required: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    password: {
        type: String,
        min: [USERNAME_MIN, `The password parameter should not be less then ${PASSWORD_MIN} characters`],
        max: [USERNAME_MAX, `The password parameter should not be more then ${PASSWORD_MAX} characters`],
        required: true,
    },
    rentals: [{
        type: Schema.Types.ObjectId,
        ref: 'Rental'
    }]
});

userSchema.methods.isSamePassword = function(reqPassword) {
    return bcrypt.compareSync(reqPassword, this.password);
}

userSchema.pre('save', function(next) {

    const user = this;

    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(user.password, salt, function(error, hash) {
            user.password = hash;
            next();
        })
    })
});

module.exports = mongoose.model(MODEL_NAME, userSchema);