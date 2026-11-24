const passport = require("passport");
const { Strategy: DiscordStrategy } = require("passport-discord");
const { signToken } = require("../utils/jwt");

passport.use(
  new DiscordStrategy(
    {
      clientID: process.env.DISCORD_CLIENT_ID,
      clientSecret: process.env.DISCORD_CLIENT_SECRET,
      callbackURL: process.env.DISCORD_CALLBACK_URL
    },
    (accessToken, refreshToken, profile, done) => {
      const avatar = profile.avatar
        ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
        : "https://cdn.discordapp.com/embed/avatars/0.png";
      const user = {
        provider: "discord",
        id: profile.id,
        name: profile.global_name || profile.username || "Discord User",
        username: profile.username,
        email: profile.email || "No email shared",
        avatar
      };

      return done(null, user);
    }
  )
);

const discordAuthCallback = (req, res) => {
  const token = signToken(req.user);

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 24 * 60 * 60 * 1000
  });

  return res.json({ token });
};

module.exports = { discordAuthCallback };
