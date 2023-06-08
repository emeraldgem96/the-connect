const express = require('express');
const loginSignupController = require('../controllers/loginSignupController');
const router = express.Router();

// Login & Sign-up Routes
router.route('/')
    .get(loginSignupController.login_signup)
    .post(loginSignupController.login_post)

router.route('/register')
    .post(loginSignupController.register_post)

module.exports = router;