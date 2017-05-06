var moment = require('moment');

module.exports = {
    convert: function(date) {
        return moment(date)
            .format("dddd, D MMM");
    },
    year: function(date) {
        return moment(date)
            .format("dddd, D MMM YYYY");
    }
}
