const Team = require('../models/team');
const methods = {};

methods.getAll = (req, res, next) => {
  Team.find({}, (err, teams) => {
    res.json({
      success: true,
      records: teams
    })
  })
}

module.exports = methods;