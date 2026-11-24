# OAuth 2.0 (Google, Discord, GitHub, and LinkedIn) with Passport.js & JWT

---
## 1. Getting OAuth Credentials

### Google Cloud Console
1. Visit [Google Cloud Console](https://console.cloud.google.com/) &rarr; Create/select a project.
2. **APIs & Services** &rarr; **OAuth consent screen** &rarr; Select **External** &rarr; Add your email & test users.
3. **Credentials** &rarr; **+ Create Credentials** &rarr; **OAuth client ID**:
   - Type: `Web application`
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URI: `http://localhost:3000/auth/google/callback`
4. Copy `Client ID` & `Client Secret` to `.env`.

### Discord Developer Portal
1. Visit [Discord Developer Portal](https://discord.com/developers/applications) &rarr; **New Application**.
2. Go to **OAuth2** tab:
   - Under **Redirects**, click **Add Redirect**: `http://localhost:3000/auth/discord/callback`
   - Click **Save Changes**.
3. Copy `Client ID` and click `Reset Secret` to get `Client Secret`.
4. Copy values to `.env`.

### GitHub
1. In GitHub, open **Settings** &rarr; **Developer settings** &rarr; **OAuth Apps** &rarr; **New OAuth App**.
2. Set the authorization callback URL to `http://localhost:3000/auth/github/callback`.
3. Generate a client secret and copy the client ID and secret to `.env`.

### LinkedIn
1. Create an app in the [LinkedIn Developer Portal](https://www.linkedin.com/developers/apps).
2. Enable the Sign In with LinkedIn product and register `http://localhost:3000/auth/linkedin/callback` as the redirect URL.
3. Copy the client ID and client secret to `.env`.
4. LinkedIn routes are enabled only when all three `LINKEDIN_*` values are configured; otherwise, the other providers can run without LinkedIn.

---

## 2. Installation

```bash
# Install the dependencies used by this CommonJS project
npm install express passport passport-google-oauth20 passport-discord passport-github2 passport-linkedin-oauth2 jsonwebtoken cookie-parser dotenv
```

### `package.json` Configuration
The server uses CommonJS (`require`), so do not set `"type": "module"` in `package.json`.
```json
{
  "scripts": {
     "start": "node server.js"
   }
}
```

---

## 3. Environment Setup (`.env`)

Create a `.env` file in the root directory:

```env
PORT=3000
JWT_SECRET=your_jwt_secret_key_here

# Google OAuth (from Google Cloud Console)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_CALLBACK_URL=http://localhost:3000/auth/google/callback

# Discord OAuth (from Discord Developer Portal)
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
DISCORD_CALLBACK_URL=http://localhost:3000/auth/discord/callback

# GitHub OAuth (from GitHub Developer settings)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
GITHUB_CALLBACK_URL=http://localhost:3000/auth/github/callback

# LinkedIn OAuth (from LinkedIn Developer Portal)
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
LINKEDIN_CALLBACK_URL=http://localhost:3000/auth/linkedin/callback
```

---

## 4. Code Breakdown

- Setup Middleware

```javascript
// (server.js)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Initialize Passport (No express-session used; session: false)
app.use(passport.initialize());
```

```javascript
// (/middleware/auth.middleware.js)
function authenticateJWT(req, res, next) {
  let token = req.cookies?.token;

  if (!token && req.headers.authorization) {
    const parts = req.headers.authorization.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
  }

  if (!token) {
    if (req.accepts('html')) {
      return res.redirect('/');
    }
    return res.status(401).json({ authenticated: false, message: 'No token provided' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    res.clearCookie('token');
    if (req.accepts('html')) {
      return res.redirect('/redirect-to-error-page');
    }
    return res.status(401).json({ authenticated: false, message: 'Invalid or expired token' });
  }

  req.user = decoded;
  next();
}

module.exports = { authenticateJWT };
```

```javascript
// (/utils/jwt.js)
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const DEFAULT_EXPIRES_IN = '1d';

function signToken(payload, expiresIn = DEFAULT_EXPIRES_IN) {
  try {
    return jwt.sign(payload, JWT_SECRET, {
      expiresIn
    });
  } catch (error) {
    console.error('Error signing JWT token:', error.message);
    throw new Error('Token generation failed');
  }
}

function verifyToken(token) {
  if (!token) return null;

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    console.warn('JWT verification warning:', error.message);
    return null;
  }
}

module.exports = { signToken, verifyToken };
```

## 5. Strategies Configuration

- **Google Strategy (`passport-google-oauth20`)**:
  - Scopes: `['profile', 'email']`
  - Returns normalized object: `{ provider: 'google', id, name, email, avatar }`

   ```javascript
   const googleConfig = {
   clientID: process.env.GOOGLE_CLIENT_ID,
   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
   callbackURL: process.env.GOOGLE_CALLBACK_URL
   };
   ```

   ```javascript
   passport.use(
   new GoogleStrategy(
      googleConfig,
      (accessToken, refreshToken, profile, done) => {
         // In production: findOrCreate user in Database
         // For this 30-min demo: normalize the profile payload for JWT token
         const user = {
         provider: 'google',
         id: profile.id,
         name: profile.displayName || 'Google User',
         email: profile.emails && profile.emails.length > 0 ? profile.emails[0].value : 'No email',
         avatar: profile.photos && profile.photos.length > 0 ? profile.photos[0].value : 'https://via.placeholder.com/150'
         };
         return done(null, user);
      }
   )
   );

   // add Routes
   app.get('/auth/google', passport.authenticate('google', {
      session: false,
      scope: ['profile', 'email'],
      prompt: 'select_account'
   })
   );


   app.get( '/auth/google/callback',passport.authenticate('google', { session: false }),
   (req, res) => {
      const token = signToken(req.user);

      res.cookie('token', token, {
         httpOnly: true,
         secure: process.env.NODE_ENV === 'production',
         sameSite: 'lax',
         maxAge: 24 * 60 * 60 * 1000
      });
   }
   );
   ```


- **Discord Strategy (`passport-discord`)**:
  - Scopes: `['identify', 'email']`
  - Returns normalized object: `{ provider: 'discord', id, name, username, email, avatar }`

   ```javascript
   const discordConfig = {
   clientID: process.env.DISCORD_CLIENT_ID,
   clientSecret: process.env.DISCORD_CLIENT_SECRET,
   callbackURL: process.env.DISCORD_CALLBACK_URL,
   scope: ['identify', 'email']
   };
   ```

   ```javascript
   const discordStrategy = new DiscordStrategy(
   discordConfig,
   (accessToken, refreshToken, profile, done) => {
      const avatarUrl = profile.avatar
         ? `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.png`
         : 'https://cdn.discordapp.com/embed/avatars/0.png';

      const user = {
         provider: 'discord',
         id: profile.id,
         name: profile.global_name || profile.username || 'Discord User',
         username: profile.username,
         email: profile.email || 'No email shared',
         avatar: avatarUrl
      };
      return done(null, user);
   }
   );

   passport.use(discordStrategy);
   ```


### E. Logout

```javascript
app.get('/api/current-user', authenticateJWT, (req, res) => {
  res.json({
    authenticated: true,
    user: req.user,
    tokenPreview: req.cookies?.token ? req.cookies.token.substring(0, 20) + '...' : 'Bearer Token'
  });
});

app.get('/auth/logout', (req, res) => {
  res.clearCookie('token');
  res.redirect('/');
});
```

---

## 6. Run

```bash
npm start
```
For development, run `npm run dev`. The server runs on `http://localhost:3000`.
