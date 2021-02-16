const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/bookController');

bookRouter.get('/books', bookController.getData);
bookRouter.post('/save', bookController.postData);
module.exports = bookRouter;
