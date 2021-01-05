const express = require('express');
const {registration, signin} = require('../controllers/user_controllers');
const router = express.Router();

// register user
router.post('/register', registration);

// sign-in user
router.post('/signin', signin);

module.exports = router;