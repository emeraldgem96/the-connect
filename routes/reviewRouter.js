const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

// Review Routes
router.route('/details')
    .get(reviewController.review_get)

module.exports = router;