var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();

// home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Labtrak', user : req.user });
});

// login
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Labtrak', user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.redirect('/');
});

// registeration
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Labtrak', user : req.user });
});

router.post('/register', function(req, res) {
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { title: 'Labtrak', user : user });
    }

    passport.authenticate('local') (req, res, function () {
      res.redirect('/login');
    });
  });
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});



module.exports = router;
