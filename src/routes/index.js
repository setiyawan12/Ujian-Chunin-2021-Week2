const express = require('express');
const mainRouter = express.Router();

const welcomeRouter = require("./welcome")
const bookRouter = require("../routes/bookRouter")
const categoryRouter = require("../routes/categoryRouter")

mainRouter.use("/",welcomeRouter)
mainRouter.use("/", bookRouter)
mainRouter.use("/", categoryRouter)


module.exports = mainRouter;