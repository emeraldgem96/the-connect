const express = require('express');
const loginSignupController = require('../controllers/loginSignupController');
const router = express.Router();

// Login & Sign-up Routes
router.route('/')
    .get(loginSignupController.login_signup)

module.exports = router;