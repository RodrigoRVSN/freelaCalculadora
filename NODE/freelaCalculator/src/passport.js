  
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (user, done) {
        done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: '741892207417-el7jn953088d4lovtpvh4p7gbtiq8hnq.apps.googleusercontent.com',
    clientSecret: 'QqxaVkkwXB-2BjfE3uPwgiia',
    callbackURL: "http://localhost:3000/google/callback"
},
function(accessToken, refreshToken, profile, done) {
    /*
     use the profile info (mainly profile id) to check if the user is registerd in ur db
     If yes select the user and pass him to the done callback
     If not create the user and then select him and pass to callback
    */
    return done(null, profile);
  }
));








