const { dirname } = require('path');
const path = require('path');

// products route controller
module.exports.getProducts = async (req, res, next) => {
    res.send('products list')
};

