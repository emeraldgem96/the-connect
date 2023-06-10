const mongoose = require('mongoose');
const {Schema} = mongoose;
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {
        String,
    },
    password: {
        String,
    }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

// Amen for stack overflow for this code, will need to be updated
passport.serializeUser(function(user, done) {
    done(null, user);
  });
passport.deserializeUser(function(user, done) {
    done(null, user);
  });


module.exports = User;