const User = require('../models/user')
const passwordHash = require('password-hash')
const auth = require('../helpers/verify.js')
    .auth;
const methods = {}

methods.signin = (username, password, next) => {
    User.findOne({
            username: username
        })
        .exec((error, record) => {
            if (error) {
                next(null, {
                    message: "Password anda salah",
                    success: false
                })
            } else {
                if (passwordHash.verify(password, record.password)) {
                    let data = Object.assign({}, record.toJSON())
                    delete data.nama;
                    delete data.id;
                    delete data.password;
                    next(null, {
                        message: "Login Sukses",
                        token: auth(data),
                        success: true
                    })
                } else {
                    next(null, {
                        message: "Password anda salah",
                        success: false
                    })
                }
            }
        })
}

methods.signup = (req, res) => {
    var name = req.body.name;
    var username = req.body.username;
    var password = passwordHash.generate(req.body.password);
    var role = req.body.role;

    User.create({
        name: name,
        username: username,
        password: password,
        role: role
    }, (error, record) => {
        if (error) {
            res.json({
                error: error,
                success: false,
                records: null
            })
        } else {
            res.json({
                record: record,
                success: true
            })
        }
    })
}

module.exports = methods
