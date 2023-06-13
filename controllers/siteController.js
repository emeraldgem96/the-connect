const { request } = require("express");
const Review = require('../models/reviewModel');

module.exports = {
    index: (request, response) => {
        response.render('pages/index');
    },
    reviews: async (request, response) => {
      try {
        const allReviews = await Review.find({});
        response.render('pages/reviews', {
          reviewArray: allReviews
        });
      } catch (error) {
        console.error(error);
        // Handle the error, such as displaying an error page or sending an error response
        response.status(500).send('Internal Server Error');
      }
    }    
}