const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

// Admin Routes
router.route('/')
    .get(adminController.admin)

router.route('/create-review')
    .get(adminController.review_create)
    .post(adminController.review_create_post)

router.route('/create-business')
    .get(adminController.business_create)
    .post(adminController.business_create_post)

module.exports = router;