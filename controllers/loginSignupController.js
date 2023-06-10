const passport = require('passport');
const User = require('../models/userModel')

module.exports = {
    login_signup: (request, response) => {
        response.render('pages/login');
    },
    login_post: (request, response) => {
        const {username, password} = request.body;
    const user = new User({
      username: username,
      password: password
    });

    request.login(user, (error) => {
      if (error) {
        console.log(error)
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin');
        });
      }
    });
  },
    register_post: (request, response) => {
        const {username, password} = request.body;
        User.register({username: username}, password, (error, user) => {
          if (error) {
            console.log(error);
            response.redirect('/register');
          } else {
            passport.authenticate('local')(request, response, () => {
              response.redirect('/login');
            });
          }
        }); 
      },
}