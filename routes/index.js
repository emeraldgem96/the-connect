const express = require('express');
const siteRouter = require('../routes/siteRouter');
const reviewRouter = require('../routes/reviewRouter')
const loginSignupRouter = require('../routes/loginSignupRouter');
const adminRouter = require('../routes/adminRouter');
const router = express.Router();

router.use('/', siteRouter);
router.use('/reviews', reviewRouter);
router.use('/login', loginSignupRouter);
router.use('/admin', adminRouter);

module.exports = router;