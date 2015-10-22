var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Labtrak' });
});

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Labtrak' });
});

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Labtrak' });
});

module.exports = router;
