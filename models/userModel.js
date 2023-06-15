const mongoose = require('mongoose');
const {Schema} = mongoose;
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
let GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');


const userSchema = new Schema({
    username: {
        String,
    },
    password: {
        String,
    },
    review: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Review'
    }],
    googleId: {
      type: String
    }
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const User = mongoose.model('User', userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username, name: user.displayName });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL:
        "http://localhost:3000/login/auth/google/admin",
    },
    function (accessToken, refreshToken, email, cb) {
      console.log(email);
      User.findOrCreate(
        { googleId: email.id, username: email.displayName },
        function (err, user) {
          return cb(err, user);
        }
      );
    }
  )
);

module.exports = User;