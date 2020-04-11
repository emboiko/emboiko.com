const LocalStrategy = require("passport-local").Strategy;
const User = require("../models/user");

function initializePassport(passport) {

    passport.use(new LocalStrategy(
        { usernameField: "username" },
        async (username, password, done) => {
            User.findByCredentials(username, password, done);
        }));

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        return done(null, { id: id });
    });

}

const authenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}

const notAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
}

module.exports = { initializePassport, authenticated, notAuthenticated };