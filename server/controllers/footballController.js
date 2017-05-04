const User = require('../models/user')

const methods = {}

methods.getAllUser = (req, res) => {
    User.find({})
        .exec((error, records) => {
            if (error) {
                res.json({
                    error: error,
                    success: false,
                    records: null,
                    msg: 'Data Tidak Ditemukan'
                })
            } else {
                res.json({
                    records: records,
                    success: true
                })
            }
        })
}

module.exports = methods
