const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const indexRouter = require('./Day11-Static Page Server/index');
const day12router = require('./Day12-Email Notification System/send-email');
const day13router = require('./Day13-Chat App/chat').router;
const day14router = require('./Day14-User API/users');
const day15router = require('./Day15-Shopify API/shopify');
const day16router = require('./Day16-Web Scraping/web-scraping');
const day18router = require('./Day18-Text-Detection/text-detection');
const day19router = require('./Day19-Alexa Skill/alexa-skill');
const day22router = require('./Day22-GraphQL Server/server');
const day27router = require('./Day27-KaggleAPI/kaggle-api');
const day29router = require('./Day29-PassportJS/passport');
const day30router = require('./Day30-CryptoBot/bot');
const day35router = require('./Day35-Excel Processor/excel-processor');
const day36router = require('./Day36-Slack Notifier/notifier');
const day37router = require('./Day37-Messenger Webhook/index');
const day40router = require('./Day40-Stripe Demo/server');
const day41router = require('./Day41-Open Banking/server');
const day47router = require('./Day47-Expense Manager/expense-manager/server/server');

const app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
app.set('views', path.join(__dirname, 'Day47-Expense Manager', 'expense-manager', 'client'));
app.set('view engine', 'ejs');
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'Day11-Static Page Server/public')));
app.use(express.static(path.join(__dirname, 'Day18-Text-Detection')));
app.use(express.static(path.join(__dirname, 'Day35-Excel Processor')));
app.use(express.static(path.join(__dirname, 'Day24-WebRTC')));
app.use(express.static(path.join(__dirname, 'Day38-Live Scratchpad')));
app.use(express.static(path.join(__dirname, 'Day40-Stripe Demo')));
app.use(express.static(path.join(__dirname, 'Day41-Open Banking')));
app.use(express.static(path.join(__dirname, 'Day47-Expense Manager', 'expense-manager', 'client')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname));

app.use('/', indexRouter);
app.use('/day12', day12router);
app.use('/day13', day13router);
app.use('/day14', day14router);
app.use('/day15', day15router);
app.use('/day16', day16router);
app.use('/day18', day18router);
app.use('/day19', day19router);
app.use('/day22', day22router);
app.use('/day27', day27router);
app.use('/day29', day29router);
app.use('/day30', day30router);
app.use('/day35', day35router);
app.use('/day36', day36router);
app.use('/day37', day37router);
app.use('/day40', day40router);
app.use('/day41', day41router);
app.use('/day47', day47router);

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
