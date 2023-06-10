const { request, response } = require("express");
const Review = require('../models/reviewModel');
const Business = require('../models/businessModel');
const {v4: uuid} = require('uuid')

module.exports = {
    reviews: (request, response) => {
        response.render('pages/reviews')
        // displays the whole reviews page
    },
    review_get: (request, response) => {
        // displays each indivdual review page
        let id = request.params._id;
        const foundReview = Review.find(review => review._id === String(id));
        response.render('pages/review-template', {
            reviewItem: foundReview
        })
    }
}