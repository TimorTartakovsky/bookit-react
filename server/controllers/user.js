const User = require('../models/user');
const jwt =  require('jsonwebtoken');
const config = require('../config/dev');
const TOKEN_PREFIX = 'Bearer ';

exports.auth = function(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(422).send({
            errors: [{
                status: 422,
                title: 'Auth Error',
                message: `Cannot be authorized with provided email = ${email} and password = ${password}.`
            }]
        });
    }
    User.findOne({ email }, function(error, user) {
        if (error) {
            return res.status(422).send({
                 errors: [{
                     status: 422,
                     title: 'Auth Error',
                     message: `Try again later.`
                 }]
             });
         }
         if (!user) {
            return res.status(422).send({
                errors: [{
                    status: 422,
                    title: 'Auth Error',
                    message: `User doesn't exists.`
                }]
            });
         }
         if (user.isSamePassword(password)) {
            const token = jwt.sign({
                userId: user._id,
                username: user.username,
            }, config.secret, { expiresIn: 60 * 60 });
            return res.json({ token })
         }

         return res.status(422).send({
            errors: [{
                status: 422,
                title: 'Auth Error',
                message: `Wrong password or email.`
            }]
        });
    });
}

exports.register = function(req, res) {
    const { username, email, password, passwordConfirmation } = req.body;

    if (!username || !password) {
        return res.status(422).send({
            errors: [{
                status: 422,
                title: 'Auth Error',
                message: `Cannot be authorized with provided username = ${username} and password = ${password}.`
            }]
        });
    }

    if (password !== passwordConfirmation) {
        return res.status(422).send({
            errors: [{
                status: 422,
                title: 'Auth Error',
                message: `Password isn't equal to Confirmation.`
            }]
        });
    }
    User.findOne({ email }, (error, existingUser) => {
        if (error) {
            return res.status(422).send({
                errors: [{
                    status: 422,
                    title: 'Auth Error',
                    message: `Try again later.`
                }]
            });
        }
        if (existingUser) {
            return res.status(422).send({
                errors: [{
                    status: 422,
                    title: 'Auth Error',
                    message: `This email is already in use.`
                }]
            });
        }

        const user = new User({
            username,
            email,
            password,
        });
        user.save((error) => {
            if (error) {
               return res.status(422).send({
                    errors: [{
                        status: 422,
                        title: 'Auth Error',
                        message: `Try again later`
                    }]
                });
            }
            res.json({'registered': true})
        });
    });
}

exports.authMiddleware = function(req, res, next) {
    const token = req.headers.authorization;
    if (token) {
        const user = parseToken(token);
        User.findById(user._id, function(error, user) {
            if (error || !user) {
                return res.status(422).send({
                    errors: [{
                        status: 422,
                        title: 'Auth Error',
                        message: `Try again later`
                    }]
                });
            }
            res.locals.user = user;
            next();
        });
    }
    return res.status(422).send({
        errors: [{
            status: 422,
            title: 'Auth Error',
            message: `You need to login to have an access.`
        }]
    });
}

function parseToken(token) {
    const decoded = jwt.verify(token.replace(TOKEN_PREFIX, ''), config.secret);
    return decoded;
}