
module.exports = {
    admin: (request, response) => {
        response.render('pages/admin');
    },
    review_create: (request, response) => {
        response.render('pages/create-review')
    },
    business_create: (request, response) => {
        response.render('pages/create-business')
    }
}

