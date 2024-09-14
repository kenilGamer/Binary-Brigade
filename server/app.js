const dotenv = require("dotenv").config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const expressSession = require("express-session");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
// const apiRouter = require('./routes/apis'); // Ensure path is correct
const apiRouter = require('./routes/apis');
const passport = require('passport');
const flash = require("connect-flash");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(flash());
app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "hey hello bro"
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Enable CORS
app.use(cors());

// Define your routes
app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/api', apiRouter); // Register the /api route prefix


// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Provide error only in development mode
  res.status(err.status || 500).json({
    message: err.message,
    // Only show stacktrace if in development
    error: req.app.get('env') === 'development' ? err : {}
  });
});

// Start the server
const port = 5001;
app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
