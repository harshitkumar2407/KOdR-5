const passport = require("passport");
const { signToken } = require("../utils/jwt");
const { Strategy: GitHubStrategy } = require("passport-github2");

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK_URL || process.env.GITHUB_CALLBAK_URL
  },
  (accessToken, refreshToken, profile, done) => {
    const user = {
      provider: "github",
      id: profile.id,
      name: profile.displayName || profile.username || "GitHub User",
      username: profile.username,
      email: profile.emails?.[0]?.value || "No email shared",
      avatar: profile.photos?.[0]?.value
    };

    return done(null, user);
  }
));

const githubAuthCallback = (req, res) => {
  const token = signToken(req.user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000
  });

  return res.json({ token });
};

const CurrentUser = (req, res) => {
  return res.json({
    authenticated: true,
    user: req.user,
    tokenPreview: req.cookies?.token
      ? `${req.cookies.token.substring(0, 20)}...`
      : "Bearer Token"
  });
};

const Logout = (req, res) => {
  res.clearCookie("token");
  return res.redirect("/");
};

module.exports = {
  githubAuthCallback,
  CurrentUser,
  Logout
};
