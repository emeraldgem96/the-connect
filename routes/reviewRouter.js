const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

// Review Routes
router.route('/')
    .get(reviewController.review)

module.exports = router;