const Review = require('../models/reviewModel');

module.exports = {
    admin: (request, response) => {
        response.render('pages/admin');
    },
    review_create: (request, response) => {
        response.render('pages/create-review')
    }, 
    review_create_post: (request, response) => {
        // Create operation from CS Comics 
        const {title, comment, recommend} = request.body;
        const newReview = new Review ({
            review_title: review_title,
            review_comment: review_comment,
            recommend: recommend
        })

        newReview.save();

        response.redirect('/confirmation');
        // need to redirect to a conf. page

    },
        // need to redirect to a conf. page
    confirmation: (request, response) => {
        response.render('pages/confirmation');
    },
    logout: (request, response) => {
        request.logout(request.user, err => {
            if (err)
            return next(err);
            response.redirect('/');
        });
    },

}

