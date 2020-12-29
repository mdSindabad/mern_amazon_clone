const express = require('express');
const createError = require('http-errors');
const router = require('./routes/user_routes');
require('dotenv').config();


// import database
require('./config/db');

// create app
const app = express();


// middlewares
app.use(express.json());
app.use('/user', router);


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
const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
