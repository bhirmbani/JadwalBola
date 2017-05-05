var express = require('express');
var router = express.Router();
var footballController = require('../controllers/footballController');

router.get('/', footballController.getAllTeams);
router.get('/fixtures', footballController.getFixtures);

module.exports = router;