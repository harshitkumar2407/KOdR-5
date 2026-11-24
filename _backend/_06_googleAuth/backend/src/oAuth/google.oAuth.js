const passport = require("passport");
const { Strategy: GoogleStrategy } = require("passport-google-oauth20");
const { signToken } = require("../utils/jwt");

const googleConfig = {
 clientID: process.env.GOOGLE_CLIENT_ID,
 clientSecret: process.env.GOOGLE_CLIENT_SECRET,
 callbackURL: process.env.GOOGLE_CALLBACK_URL
};

passport.use(
 new GoogleStrategy(googleConfig, (accessToken, refreshToken, profile, done) => {
   const user = {
      provider: 'google',
      id: profile.id,
      name: profile.displayName || 'Google User',
      email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : 'No email',
      avatar: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : 'https://via.placeholder.com/150'
   };
   return done(null, user);
 })
);

const googleAuthCallback = (req, res) => {
 const token = signToken(req.user);

 res.cookie('token', token, {
   httpOnly: true,
   secure: process.env.NODE_ENV === 'production',
   sameSite: 'lax',
   maxAge: 24 * 60 * 60 * 1000
 });

 return res.json({
    token
 });
};

const Logout = (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
};

const CurrentUser = (req, res) => {
  res.json({
    authenticated: true,
    user: req.user,
    tokenPreview: req.cookies?.token ? req.cookies.token.substring(0, 20) + '...' : 'Bearer Token'
  });
};

module.exports = {
  CurrentUser,
  googleAuthCallback,
  Logout
};