const User = require('../models/user')
const passwordHash = require('password-hash')

const methods = {};

methods.getAllUser = (req, res) => {
    User.find({})
        .exec((error, records) => {
            if (error) {
                res.json({
                    error: error,
                    success: false,
                    records: null
                })
            } else {
                res.json({
                    records: records,
                    success: true
                })
            }
        })
}

methods.insertUser = (req, res) => {
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

methods.deleteUser = function(req, res) {

    User.findByIdAndRemove(req.params.id, (error, record) => {
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

module.exports = methods;
