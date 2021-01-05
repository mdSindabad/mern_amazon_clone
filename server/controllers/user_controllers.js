const User = require('../model/user_model');
const newError = require('http-errors');
const JWT = require('jsonwebtoken');

// registration route controller
module.exports.registration = async (req, res, next) => {
    const {name, email, password} = req.body;
    const doesExist = await User.findOne({email});
    if(!doesExist) {
        const newUser = new User({name, email, password});
        newUser.save((err, user) => {
            if(err) return next(newError(500, 'user could not be registered.'));
            const token = JWT.sign({data: user._id}, 'top secret');
            const response = {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                token: `Bearer ${token}`
            };
            res.json(response);
        })
    } else {
        return next(newError(400, 'Email already registered'));
    }
};

// signin route controller
module.exports.signin = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        const matchPass = await user.comparePassword(password);
        if(matchPass) {
            const token = JWT.sign({data: user._id}, 'top secret');
            const response = {
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                },
                token: token
            };

            res.json(response)
        } else {
            return next(newError(400, 'Wrong Email or Password'));
        }
    } else {
        return next(newError(404, 'Email is not registered'));
    }
};