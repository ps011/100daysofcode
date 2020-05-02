var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var indexRouter = require('./Day11-Static Page Server/routes/index');
const day12router = require('./Day12-Email Notification System/send-email');
const day13router = require('./Day13-Chat App/chat').router;
const day14router = require('./Day14-User API/users');
const day15router = require('./Day15-Shopify API/shopify');
const day16router = require('./Day16-Web Scraping/web-scraping');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Day11-Static Page Server/public')));

app.use('/', indexRouter);
app.use('/day12', day12router);
app.use('/day13', day13router);
app.use('/day14', day14router);
app.use('/day15', day15router);
app.use('/day16', day16router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
