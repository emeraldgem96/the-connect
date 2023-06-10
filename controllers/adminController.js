
module.exports = {
    admin: (request, response) => {
        response.render('pages/admin');
    },
    review_create: (request, response) => {
        response.render('pages/create-review')
    }, 
    review_create_post: (request, response) => {
        // Create operation from CS Comics 
        response.redirect()
        // need to redirect to a conf. page

    },
    business_create: (request, response) => {
        response.render('pages/create-business')
    },
    business_create_post: (request, response) => {
        // Create operation from CS Comics
        response.redirect()
        // need to redirect to a conf. page

    },
    logout: (request, response) => {
        // request.logout();
        // response.redirect('/login');
    }
}

