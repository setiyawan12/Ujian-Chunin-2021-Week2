const express = require('express');
const mainRouter = express.Router();

const welcomeRouter = require("./welcome")
const bookRouter = require("../routes/bookRouter")

mainRouter.use("/",welcomeRouter)
mainRouter.use("/", bookRouter)

module.exports = mainRouter;