const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

// Admin Routes
router.route('/')
    .get(adminController.admin)

router.route('/create-review')
    .get(adminController.review_create)

router.route('/create-business')
    .get(adminController.business_create)

module.exports = router;