var express = require('express');
var router = express.Router();
var footballController = require('../controllers/footballController');

router.get('/', footballController.gets);

module.exports = router;