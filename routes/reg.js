var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('reg', { 
      title: 'JustinHome',
      error: req.flash('error').toString(),
      success: req.flash('success').toString()
  });
});

module.exports = router;
