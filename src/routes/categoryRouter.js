const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/', categoryController.getDataCategory);
categoryRouter.get('/:id', categoryController.getDataId);
categoryRouter.delete('/:id', categoryController.deleteDataId);
categoryRouter.post('/', categoryController.postData);
categoryRouter.put('/:id',categoryController.updateCategory)

module.exports = categoryRouter
