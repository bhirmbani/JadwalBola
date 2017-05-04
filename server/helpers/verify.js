const jwt = require('jsonwebtoken');

module.exports = {
    isUser: function(req, res, next) {
        jwt.verify(req.headers.token, 'secret', function(error, decoded) {
            if (decoded) {
                if (decoded.role === 'User') {
                    next();
                } else {
                    res.json({
                        msg: 'Anda tidak dapat menggunakan fitur ini',
                        success: false
                    })
                }
            } else {
                res.json({
                    msg: 'Anda harus login',
                    success: false
                })
            }
        })
    },
    auth: function(data) {
        let token = jwt.sign(data, 'secret', {
            expiresIn: '1h'
        })
        return token;
    }
}
