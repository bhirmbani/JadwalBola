const Football = require('../models/football');

const methods = {};

methods.getAllTeams = (req, res, next) => {
  Football.getAllTeams(req, res);
}

methods.getTimedFixtures = (req, res, next) => {
  Football.getTimedFixtures(req, res);
}

methods.getAllFixtures = (req, res, next) => {
  Football.getAllFixtures(req, res);
}

methods.getTable = (req, res, next) => {
  Football.getTable(req, res);
}

module.exports = methods;