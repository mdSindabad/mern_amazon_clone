const joi = require('joi');

const UserValidation = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    isAdmin: joi.boolean().required()
});

module.exports = UserValidation;