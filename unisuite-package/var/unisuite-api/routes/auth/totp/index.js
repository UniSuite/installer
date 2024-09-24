const express = require("express");
const _ = require("lodash");
const { users } = require('../index.js');
const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

const app = module.exports = express.Router();

app.post('/setup', async function (req, res) {
    const user = _.find(users, { username: req.body.username });

    if (!user) {
        return res.status(404).send("User not found");
    }

    // Generate a secret for the user
    const secret = speakeasy.generateSecret({ length: 20 });
    user.twoFactorSecret = secret.base32;

    // Generate QR code for the user to scan with their app
    QRCode.toDataURL(secret.otpauth_url, (err, data_url) => {
        res.status(200).send({ qrCode: data_url, secret: secret.base32 });
    });
});

app.post('/confirm', async function (req, res) {
    const user = _.find(users, { username: req.body.username });

    if (!user) {
        return res.status(404).send("User not found");
    }

    const verified = speakeasy.totp.verify({
        secret: user.twoFactorSecret,
        encoding: 'base32',
        token: req.body.token
    });

    if (verified) {
        user.twoFactorEnabled = true;
        res.status(200).send("2FA enabled successfully");
    } else {
        res.status(400).send("Invalid token");
    }
});

app.post('/disable', async function (req, res) {
    const user = _.find(users, { username: req.body.username });
  
    if (!user) {
      return res.status(404).send("User not found");
    }
  
    // Überprüfe den aktuellen 2FA-Code des Benutzers
    const isTokenValid = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: 'base32',
      token: req.body.token
    });
  
    if (!isTokenValid) {
      return res.status(400).send("Invalid 2FA token");
    }
  
    // Deaktiviere 2FA für den Benutzer
    user.twoFactorEnabled = false;
    user.twoFactorSecret = '';
  
    res.status(200).send("2FA disabled successfully");
  });