const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const User = require('../model/user_model');
const Product = require('../model/product_models');


module.exports.isLoggedIn = (req, res, next) => {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : '';
    if(token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
            if(err) {
                next(createError(403, 'Invalid token!'))
            } else {
                const userId = decoded.data;
                User.findById(userId)
                    .then(user => {
                        next()
                    })
                    .catch( err => next(createError(404, "no user found!")))
            }
        });
    } else {
        next(createError.Unauthorized('you are not authorized'))
    }

}