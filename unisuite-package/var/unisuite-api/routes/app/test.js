const express = require('express');
const { expressjwt: jwt } = require('express-jwt');
const config = require('../../config');

const app = express.Router();

// In-memory blacklisting (import or define here if needed)
const { blacklistedTokens } = require('../auth'); // Import the blacklistedTokens

// Validate access_token and check blacklist
const jwtCheck = jwt({
    secret: config.secret,
    audience: config.audience,
    issuer: config.issuer,
    algorithms: ['HS256'],
    isRevoked: (req, payload, done) => {
        const token = req.headers.authorization;
        if (blacklistedTokens.has(token)) {
            return true; // Token is revoked
        }
        return false;
    }
});

// Check for scope
function requireScope(scope) {
    return function (req, res, next) {
        var has_scopes = req.auth.scope === scope;
        if (!has_scopes) {
            res.sendStatus(401);
            return;
        }
        next();
    };
}

// Apply middleware
app.use('/', jwtCheck, requireScope('full_access'));

// Example protected route
app.get('/', function (req, res) {
    res.status(200).send("WORKS");
});

module.exports = app;