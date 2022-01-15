var express = require('express');
const { bookController } = require('../controlllers')
const { addBookValidation, updateBookValidation } = require('../validation/book')
const { isAuth } = require("../authentication/jwtAuth")

var router = express.Router();


router.get('/', bookController.getAllBooks);
router.post('/', isAuth, addBookValidation, bookController.addBook);
router.put('/:bookId', isAuth, updateBookValidation, bookController.editBook);

module.exports = router