'use strict';

require('rootpath')();

const debug = require('debug')(process.env.APP_NAME + ':http-server');

const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');

const app = express();


// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = process.env.ENVIRONMENT && process.env.ENVIRONMENT.toLowerCase() === 'dev' ? err : {};

  debug(err);

  // render the error page
  res.status(err.status || 500).send(res.locals.message);
});

module.exports = app;
