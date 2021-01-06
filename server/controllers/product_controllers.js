const Product = require('../model/product_models');
const ProductValidation = require('../helpers/productValidation');
const newError = require('http-errors');

// fetch all products
module.exports.getProducts = async (req, res, next) => {
    const productsList = await Product.find();
    if(!productsList) {
        next(newError(500, "Error fetching data from the server."))
    }else {
        res.json(productsList)
    }
};

// add new products
module.exports.addProducts = async (req, res, next) => {
    const {value, error} = await ProductValidation.validate(req.body);
    if(error) {
        next(newError(422))
    }else {
        const NewProduct = new Product(value);
        NewProduct.save((err, product) => {
            if(err) {
                next(next(500, 'Error saving data to the server.'));
            }else {
                res.status(201).json(product);
            }
        })
    }
};

