var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  data = ['images', 'stylesheets', 'javascripts']
  res.render('index', { title: 'Prasheel\'s Static Server' , "files": data});
});

module.exports = router;
