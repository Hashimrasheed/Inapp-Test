var express = require('express');
const { userController } = require('../controlllers')

var router = express.Router();


router.get('/', userController.getToken);

module.exports = router