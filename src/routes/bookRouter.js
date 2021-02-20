const express = require('express');
const bookRouter = express.Router();
const bookController = require('../controllers/bookController');

bookRouter.get('/', bookController.getData);
bookRouter.get('/:id', bookController.getDataId);
bookRouter.post('/', bookController.postData);
bookRouter.delete('/:id', bookController.deleteDataId);
bookRouter.put('/:id', bookController.updateBook);

// bookRouter.get('/', bookController.getDatas);
module.exports = bookRouter;
