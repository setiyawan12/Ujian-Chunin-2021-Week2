const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('../controllers/categoryController');

categoryRouter.get('/category', categoryController.getDataCategory);
categoryRouter.get('/category/:id', categoryController.getDataId);

module.exports = categoryRouter
