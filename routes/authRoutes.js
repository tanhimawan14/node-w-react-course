const passport = require('passport');

module.exports = (app) => {
    // routing to auth/google, then authenticate using 'google', using googleStrategy
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));
}
