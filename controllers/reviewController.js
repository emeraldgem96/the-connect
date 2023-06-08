const { request, response } = require("express");
const Review = require('../models/reviewModel');
const Business = require('../models/businessModel');

module.exports = {
    reviews: (request, response) => {
        response.render('pages/reviews')
        // displays the whole reviews page
    },
    review: (request, response) => {
        // displays each indivdual review page
        
    }
}