var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { 
      title: 'JustinHome',
      error: req.flash('error').toString(),
      success: req.flash('success').toString(),
      username: req.session.username
  });
});

module.exports = router;

