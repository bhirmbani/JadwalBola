var express = require('express');
var app = express()
var bodyParser = require('body-parser');

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/jadwalbola')

var authController = require('./controllers/authController')

const passport = require('passport')
const Strategy = require('passport-local')
    .Strategy

passport.use(new Strategy(authController.signin));

var users = require('./routes/users')
var auths = require('./routes/auths')
var footballs = require('./routes/footballs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token")
    next()
})

app.use('/users', users)
app.use('/', auths)
app.use('/footballs', footballs)

app.listen(3000)
