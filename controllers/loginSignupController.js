const User = require('../models/userModel')

module.exports = {
    login_signup: (request, response) => {
        response.render('pages/login');
    },
    login_post: (request, response) => {
        
    },
    register_post: (request, response) => {

    }
}