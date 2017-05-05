var express = require('express');
var router = express.Router();
var footballController = require('../controllers/footballController');

// teams
router.get('/', footballController.getAllTeams);

// fixtures
router.get('/timed-fixtures', footballController.getTimedFixtures);
router.get('/all-fixtures/:id', footballController.getAllFixtures);

// table
router.get('/tables', footballController.getTable);

// players
router.get('/players/:id', footballController.getPlayers);

module.exports = router;
