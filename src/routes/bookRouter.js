const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/bookController');

bookRouter.get('/books', bookController.getData);
bookRouter.post('/save', bookController.postData);
bookRouter.get('/books/:id', bookController.getDataId);
bookRouter.delete('/books/:id', bookController.deleteDataId)
module.exports = bookRouter;
