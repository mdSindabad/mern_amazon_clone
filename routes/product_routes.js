const express = require('express');
const router = express.Router();
const {getProducts} = require('../controllers/product_controllers');

// get all products
router.get('/', getProducts)

module.exports = router;