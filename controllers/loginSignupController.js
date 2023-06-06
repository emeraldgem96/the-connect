const User = require('../models/userModel')

module.exports = {
    login_signup: (request, response) => {
        response.render('pages/login');
    }
}