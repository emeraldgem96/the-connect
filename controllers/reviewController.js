const { request, response } = require("express");
const Review = require('../models/reviewModel');
const Business = require('../models/businessModel');

module.exports = {
    review: (request, response) => {
        response.render('pages/reviews')
    },
    create_review: (request, response) => {
        response.render('pages/create-review')
    },
    business_create: (request, response) => {
        response.render('pages/create-business')
    }
}