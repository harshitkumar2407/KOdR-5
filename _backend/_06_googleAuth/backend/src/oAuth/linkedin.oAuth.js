const passport = require("passport");
const { Strategy: LinkedInStrategy } = require("passport-linkedin-oauth2");
const { signToken } = require("../utils/jwt");

const linkedinConfig = [
  process.env.LINKEDIN_CLIENT_ID,
  process.env.LINKEDIN_CLIENT_SECRET,
  process.env.LINKEDIN_CALLBACK_URL
];
const isLinkedInConfigured = linkedinConfig.every(Boolean);

if (linkedinConfig.some(Boolean) && !isLinkedInConfigured) {
  throw new Error(
    "LinkedIn OAuth requires LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, and LINKEDIN_CALLBACK_URL."
  );
}

if (isLinkedInConfigured) {
  passport.use(
    new LinkedInStrategy(
      {
        clientID: process.env.LINKEDIN_CLIENT_ID,
        clientSecret: process.env.LINKEDIN_CLIENT_SECRET,
        callbackURL: process.env.LINKEDIN_CALLBACK_URL,
        scope: ["r_emailaddress", "r_liteprofile"]
      },
      (accessToken, refreshToken, profile, done) => {
        const user = {
          provider: "linkedin",
          id: profile.id,
          name: profile.displayName || "LinkedIn User",
          email: profile.emails?.[0]?.value || "No email shared",
          avatar: profile.photos?.[0]?.value
        };

        return done(null, user);
      }
    )
  );
} else {
  console.warn("LinkedIn OAuth is disabled because its environment variables are unset.");
}

const linkedInAuthCallback = (req, res) => {
  const token = signToken(req.user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000
  });

  return res.json({ token });
};

module.exports = { linkedInAuthCallback, isLinkedInConfigured };
