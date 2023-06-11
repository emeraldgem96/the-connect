const { request, response } = require("express");
const Business = require('../models/businessModel');
const Review = require('../models/reviewModel');
// const {v4: uuid} = require('uuid')

module.exports = {
      review_get:(request, response) => {
          response.render('pages/review-details')
  }
}