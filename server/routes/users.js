var express = require('express')
var router = express.Router()
var userController = require('../controllers/userController')
const helper = require('../helpers/verify.js');

router.get('/', userController.getAllUser);
router.post('/', userController.insertUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
