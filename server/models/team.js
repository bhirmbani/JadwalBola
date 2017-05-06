const mongoose = require('mongoose')
const Schema = mongoose.Schema

let teamSchema = new Schema({
    idNumber: {
        type: String
    },
    teamName: {
        type: String
    }
})

let Team = mongoose.model('Team', teamSchema);

module.exports = Team;
