var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../models/users');
var verify = require('../verify');

/* GET users listing. */
router.get('/', verify.verifyOrdinaryUser, verify.verifyAdmin, function(req, res, next) {
  User.find({}, function (err, out) {
    if (err)  throw err;
    res.json(out);
  });
});

router.post('/register', function (req, res, next) {
  User.register(new User({ username : req.body.username}),
      req.body.password, function (err, out) {
        if (err)  return res.status(500).json({err: err});
        out.firstname = req.body.firstname;
        out.lastname = req.body.lastname;
        out.save(function (err, out) {
          if (err)  return res.status(500).json({err: err});
          passport.authenticate('local')(req, res, function () {
            return res.status(200).json({status: 'Registration Successful!'});
          });
        });
      }
  );
});

router.post('/login', function (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({
        err: info
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return res.status(500).json({
          err: 'Could not log in user'
        });
      }
      var token = verify.getToken({"username":user.username, "_id":user._id, "admin": user.admin});
      res.status(200).json({
        status: 'Login successful!',
        success: true,
        token: token
      });
    });
  })(req,res,next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).json({
    status: 'Bye!'
  });
});

module.exports = router;
