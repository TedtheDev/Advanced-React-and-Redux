const passport = require('passport');
const User = require('../models/user');
const { secret } = require('../config/config').jwtConfig;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

// Setup options for JWT strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' with that user
    // otherwise, call done without a user object
    User.findById(payload.sub, function(err, user) {
        // error with connection with database or something incomplete
        if(err) { return done(err, false);}

        if(user) {
            // no error and user exists
            // send the user on
            done(null, user);
        } else {
            // no error in finding a user
            // but didn't find user
            done(null, false);
        }
    })
});

// Tell passport to use this strategy
passport.use(jwtLogin);