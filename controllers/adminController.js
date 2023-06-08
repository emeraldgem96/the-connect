
module.exports = {
    admin: (request, response) => {
        response.render('pages/admin');
    },
    review_create: (request, response) => {
        response.render('pages/create-review')
    }, 
    review_create_post: (request, response) => {

    },
    business_create: (request, response) => {
        response.render('pages/create-business')
    },
    business_create_post: (request, response) => {
        
    }
}

