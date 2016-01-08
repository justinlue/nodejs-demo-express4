var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { 
      title: 'JustinHome',
      error: req.flash('error').toString(),
      success: req.flash('success').toString()
  });
});

router.post('/', function(req, res, next) {
    var user = {
        username:'justin',   
        password:'123456'
    };

    if (req.body.username === user.username &&
        req.body.password === user.password) {
        req.flash('success', ' Login success');    
        req.session.username = req.body.username;
        res.redirect('/home');
    } else {
        req.flash('error', ' Please input right params');    
        return res.redirect('/login');
    }
/*
  if (req.body['username'] == 0  ||
      req.body['password'] == 0) {
      req.flash('error');
      return res.redirect('/login');
  }
  res.locals.username = req.session.username
  res.render('home', { 
      title : 'JustinHome',
      username: req.body['username'] 
  });
*/
});

module.exports = router;

