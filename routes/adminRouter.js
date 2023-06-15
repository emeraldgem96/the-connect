const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

// Admin Routes
router.route('/')
    .get(adminController.admin)

router.route('/change-review')
    .get(adminController.change_review)

router.route('/change-review/:_id')
    .delete(adminController.review_delete)

router.route('/create-review')
    .get(adminController.review_create)
    .post(adminController.review_create_post)

router.route('/submission-success')
    .get(adminController.confirmation)

router.route('/logout')
    .get(adminController.logout)

module.exports = router;