var express = require('express')
var router = express.Router()
var authController = require('../controllers/authController')
const helper = require('../helpers/verify.js');
const passport = require('passport')

router.post('/signin', passport.authenticate('local', {
    session: false
}), function(req, res) {
    var user = req.user;
    res.send(user);
});

router.post('/signup', authController.signup)

module.exports = router
