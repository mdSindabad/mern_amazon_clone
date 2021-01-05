const express = require('express');
const router = express.Router();
const {getProducts, addProducts} = require('../controllers/product_controllers');
const Product = require('../model/product_models');
const {isLoggedIn} = require('../helpers/verify-login');

// get all products
router.get('/', isLoggedIn, getProducts)

// add products
router.post('/', isLoggedIn, addProducts)

module.exports = router;