var express = require('express')
var router = express.Router()
var footballController = require('../controllers/footballController')
const helper = require('../helpers/verify.js');

router.get('/', footballController.getAllUser);

module.exports = router;
