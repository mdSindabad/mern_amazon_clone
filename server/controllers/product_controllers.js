const { dirname } = require('path');
const path = require('path');

// products route controller
module.exports.getProducts = async (req, res, next) => {
    res.send('products list')
};

module.exports.addProducts = async (req, res, next) => {
    res.send('add products')
};

