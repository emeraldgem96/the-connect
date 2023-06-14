const Review = require('../models/reviewModel');

module.exports = {
    admin: (request, response) => {
        response.render('pages/admin');
        if(request.isAuthenticated()) {
           response.render('pages/admin'); 
        } else {
            response.redirect('/login')
        };        
    },
    review_create: (request, response) => {
        console.log(request.isAuthenticated());
        if(request.isAuthenticated()) {
            response.render('pages/create-review')
        } else {
            response.redirect('/login')
        };
    }, 
    review_create_post: (request, response) => {
        // Create operation from CS Comics 
        const {business_name, business_address, website, category, rating, review_title, review_blurb, recommend, user} = request.body;
        const newReview = new Review ({
            business_name: business_name,
            business_address: business_address,
            website: website,
            category: category,
            rating: rating,
            review_title: review_title,
            review_blurb: review_blurb,
            recommend: recommend,
            user: user
        });

        newReview.save();

        response.redirect('/admin/submission-success');
        // need to redirect to a conf. page

    },
    change_review: async (request, response) => {
        try {
          const allReviews = await Review.find({});
          response.render('pages/change-review', {
            reviewArray: allReviews
          });
        } catch (error) {
          console.error(error);
          // Handle the error, such as displaying an error page or sending an error response
          response.status(500).send('Internal Server Error');
        }
      },
    review_delete: (request, response) => {
        const { _id } = request.params;
        Review.deleteOne({ _id:_id}, (error) => {
            if(error) {
                return error;
            } else {
                response.redirect('/admin/change-review')
            }
        });
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

