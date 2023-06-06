const { request, response } = require("express")


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