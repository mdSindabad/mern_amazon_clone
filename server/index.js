const express = require('express');
const createError = require('http-errors');
const userRouter = require('./routes/user_routes');
const productRouter = require('./routes/product_routes');
const checkout = require('./routes/checkout_route');
require('dotenv').config();


// import database
require('./config/db');

// create app
const app = express();


// middlewares
app.use(express.json());
app.use('/user', userRouter);
app.use('/products', productRouter);
app.use('/checkout', checkout);


// 404 page
app.use((req, res, next) => {
    next(createError(404, 'Page not found.'));
});

// error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        err: err.status || 500,
        msg: err.message
    });
});


// initialize server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

