const joi = require('joi');

const ProductValidation = joi.object({
    name: joi.string().required(),
    category: joi.string().required(),
    image: joi.string().required(),
    price: joi.number().required(),
    brand: joi.string().required(),
    rating: joi.number().required(),
    stock: joi.number().required(),
});

module.exports = ProductValidation;