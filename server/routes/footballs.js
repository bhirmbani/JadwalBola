var express = require('express');
var router = express.Router();
var footballController = require('../controllers/footballController');

router.get('/', footballController.getAllTeams);

module.exports = router;