const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/category', categoryController.getDataCategory);
categoryRouter.get('/category/:id', categoryController.getDataId);
categoryRouter.delete('/category/:id', categoryController.deleteDataId);
categoryRouter.post('/category/save', categoryController.postData);
categoryRouter.put('/category/:id',categoryController.updateCategory)

module.exports = categoryRouter
