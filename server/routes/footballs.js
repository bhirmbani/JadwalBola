var express = require('express');
var router = express.Router();
var footballController = require('../controllers/footballController');

router.get('/', footballController.getAllTeams);

// fixtures
router.get('/timed-fixtures', footballController.getTimedFixtures);
router.get('/all-fixtures/:id', footballController.getAllFixtures);

// table
router.get('/tables', footballController.getTable);

module.exports = router;