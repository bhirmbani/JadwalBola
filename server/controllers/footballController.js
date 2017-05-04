const Football = require('../models/football');

const methods = {};

methods.gets = (req, res, next) => {
  Football.gets(req, res);
}

module.exports = methods;