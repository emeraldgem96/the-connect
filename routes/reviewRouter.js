const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

// Review Routes
router.route('/')
    .get(reviewController.review)

router.route('/create-review')
    .get(reviewController.create_review)

router.route('/create-business')
    .get(reviewController.business_create)

// router.route('/:_id')
//     .get(reviewController.review)

module.exports = router;