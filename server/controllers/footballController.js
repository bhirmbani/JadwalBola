const Football = require('../models/football');

const methods = {};

methods.getAllTeams = (req, res, next) => {
  Football.getAllTeams(req, res);
}

methods.getFixtures = (req, res, next) => {
  Football.getFixtures(req, res);
}

module.exports = methods;