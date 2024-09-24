const express = require("express");
const _ = require("lodash");
const config = require("../../config");
const jwt = require("jsonwebtoken");
const argon2 = require('argon2');
const speakeasy = require('speakeasy');

const app = module.exports = express.Router();

// In-memory blacklisting
const blacklistedTokens = new Set();

// Mock users database
var users = [{
  id: 1,
  username: 'gonto',
  password: 'gonto',
  twoFactorEnabled: false,
  twoFactorSecret: ''
}];

// Function to create an ID token
function createIdToken(user) {
  return jwt.sign(_.omit(user, 'password'), config.secret, { expiresIn: 60 * 60 * 5 }); // 5 hours
}

// Function to create an access token
function createAccessToken(pUsername) {
  return jwt.sign({
    iss: "https://api.unisuite.de",
    aud: pUsername,
    exp: Math.floor(Date.now() / 1000) + (15 * 60), // 15 Minuten
    scope: 'full_access',
    sub: pUsername,
    jti: genJti() // unique identifier for the token
  }, config.secret);
}

// Function to generate unique identifier (JTI)
function genJti() {
  let jti = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 16; i++) {
    jti += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return jti;
}

// Function to get user scheme from request
function getUserScheme(req) {
  let username;
  let type;
  let userSearch = {};

  if (req.body.username) {
    username = req.body.username;
    type = 'username';
    userSearch = { username: username };
  } else if (req.body.email) {
    username = req.body.email;
    type = 'email';
    userSearch = { email: username };
  }

  return { username: username, type: type, userSearch: userSearch };
}

// Signup route
app.post('/signup', async function (req, res) {
  const userScheme = getUserScheme(req);

  if (!userScheme.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  if (_.find(users, userScheme.userSearch)) {
    return res.status(400).send("A user with that username already exists");
  }

  try {
    const hashedPassword = await argon2.hash(req.body.password, {
      type: argon2.argon2id,
      memoryCost: 2 ** 16, // 64MB
      timeCost: 5, // 5 iterations
      parallelism: 2, // 2 threads
    });
    const profile = _.pick(req.body, userScheme.type, 'extra');
    profile.id = _.max(users, 'id').id + 1;
    profile.password = hashedPassword;

    users.push(profile);

    res.status(201).send({
      id_token: createIdToken(profile),
      access_token: createAccessToken(userScheme.username)
    });
  } catch (err) {
    res.status(500).send("Error during signup");
  }
});

// Login route
app.post('/login', async function (req, res) {
  const user = _.find(users, { username: req.body.username });

  if (!user) {
    return res.status(401).send("The username or password don't match");
  }

  const isPasswordValid = await argon2.verify(user.password, req.body.password);

  if (!isPasswordValid) {
    return res.status(401).send("The username or password don't match");
  }

  // Check if 2FA is enabled
  if (user.twoFactorEnabled) {
    if (!req.body.token) {
      return res.status(400).send("2FA token required");
    }

    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: req.body.token
    });

    if (!verified) {
      return res.status(401).send("Invalid 2FA token");
    }
  }

  res.status(201).send({
    id_token: createIdToken(user),
    access_token: createAccessToken(user.username)
  });
});

// Route to refresh the access token
app.post('/token/refresh', (req, res) => {
  const refreshToken = req.cookies['refreshToken'];
  if (!refreshToken) return res.status(403).send("Refresh Token required");

  jwt.verify(refreshToken, config.refreshTokenSecret, (err, user) => {
    if (err) return res.status(403).send("Invalid Refresh Token");

    const newAccessToken = createAccessToken(user.username);
    res.cookie('token', newAccessToken, { httpOnly: true, secure: true });
    res.status(200).send("Access Token refreshed");
  });
});

// Function to blacklist a token
function blacklistToken(token) {
  blacklistedTokens.add(token);
}

// Logout route to blacklist a token
app.post('/logout', function (req, res) {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(400).send("Token required");
  }
  blacklistToken(token);
  res.status(200).send("Logged out and token blacklisted");
});

// Export the functions
module.exports.blacklistedTokens = blacklistedTokens;
module.exports.blacklistToken = blacklistToken;
module.exports.users = users;
