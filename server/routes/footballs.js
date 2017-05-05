var express = require('express');
var router = express.Router();
var footballController = require('../controllers/footballController');
const helper = require('../helpers/verify.js');

// teams
router.get('/', footballController.getAllTeams);

// fixtures
router.get('/timed-fixtures', footballController.getTimedFixtures);
router.get('/getFixtures', helper.isUser, footballController.getTimedFixtures);
router.get('/all-fixtures/:id', footballController.getAllFixtures);

// table
router.get('/tables', footballController.getTable);
router.get('/getTables', helper.isUser, footballController.getTable);

// players
router.get('/players/:id', footballController.getPlayers);

module.exports = router;
