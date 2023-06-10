const passport = require('passport');
const User = require('../models/userModel')

module.exports = {
    login_signup: (request, response) => {
        response.render('pages/login');
    },
    login_post: (request, response) => {
        const user = new User({
            username: request.body.username,
            password: request.body.password
        });
        request.login(user, (error) => {
            if (error) {
                return error;
            } else {
                passport.authenticate('local')(request, response, () => {
                    response.redirect('/admin')
                })
            }
        })
    },
    register_post: (request, response) => {
        User.register({username: request.body.username}. request.body.password, (error, user) => {
            if (error) {
                console.log(error);
                response.redirect('/login/register');
            } else {
                passport.authenticate('local')(request, response, () => {
                response.redirect('/login');  
                })
            }
        })
        
    }
}