const express = require('express');
const siteRouter = require('../routes/siteRouter');
const reviewRouter = require('../routes/reviewRouter')
const loginSignupRouter = require('../routes/loginSignupRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/reviews', reviewRouter);
router.use('/login', loginSignupRouter);

module.exports = router;