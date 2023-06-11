const { request } = require("express");
const Business = require('../models/businessModel');

module.exports = {
    index: (request, response) => {
        response.render('pages/index');
    },
    reviews: async (request, response) => {
        try {
          const allBusinesses = await Business.find({}).exec();
          response.render('pages/reviews', {
            businessArray: allBusinesses
          });
        } catch (error) {
          // Handle error
          console.error(error);
          response.status(500).send('Internal Server Error');
        }
      },
}