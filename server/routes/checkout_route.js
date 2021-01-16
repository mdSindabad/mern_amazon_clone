const express = require('express');
const route = express.Router();
const {v4 : uuid} = require("uuid");
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_KEY);


route.post('/', async (req, res, next) => {
    const {token, name, amount, address, products} = req.body;
    const customer = await stripe.customers.create({
        email: token.email,
        source: token.id
    });
    const idempotencyKey = uuid();
    stripe.charges.create(
        {
            amount: amount * 100,
            currency: 'usd',
            customer: customer.id,
            receipt_email: token.email,
            shipping: {
                name: name,
                address: {
                    line1: address.address,
                    city: address.city,
                    country: address.country,
                    postal_code: address.postal_code
                }
            }
        },
        {
            idempotencyKey
        }
    ).then(response => res.json({status: "Success"}))
    .catch(err => res.json({status: "Failure"}))

})


module.exports = route;