const logger = require("morgan");
const cors = require("cors");
const http = require("http");
const express = require("express");
const errorHandler = require("errorhandler");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const helmet = require('helmet');

var app = express();

dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(helmet());

app.use(function (err, req, res, next) {
    if (err.name === 'StatusError') {
        res.send(err.status, err.message);
    } else {
        next(err);
    }
});

if (process.env.NODE_ENV === 'development') {
    app.use(logger('dev'));
    app.use(errorHandler())
}

app.use('/auth', require('./routes/auth'));
app.use('/auth/totp', require('./routes/auth/totp'));
app.use('/public/status', require('./routes/public/status'));
app.use('/app/test', require('./routes/app/test'));

var port = process.env.PORT || 1505;

http.createServer(app).listen(port, function (err) {
    console.log('listening in http://localhost:' + port);
});
