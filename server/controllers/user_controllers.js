const User = require('../model/user_model');
const newError = require('http-errors');
const JWT = require('jsonwebtoken');
const UserValidation = require('../helpers/userValidation');

// registration route controller
module.exports.registration = async (req, res, next) => {
    const {value, error} = await UserValidation.validate(req.body);
    if(error) {
        next(newError(422))
    }else {
        const {name, email, password} = value;
        const doesExist = await User.findOne({email});
        if(!doesExist) {
            const newUser = new User({name, email, password});
            newUser.save((err, user) => {
                if(err) return next(newError(500, 'user could not be registered.'));
                const token = JWT.sign({data: user._id}, process.env.SECRET_KEY);
                const response = {
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                    },
                    token: token
                };
                res.json(response);
            })
        } else {
            return next(newError(400, 'Email already registered'));
        }
    }
};

// signin route controller
module.exports.signin = async (req, res, next) => {
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(user) {
        const matchPass = await user.comparePassword(password);
        if(matchPass) {
            const token = JWT.sign({data: user._id}, process.env.SECRET_KEY);
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