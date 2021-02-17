const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
  const resObject = {
    message: "Welcome to Ujian Chunin Week2",
    status: 200,
    createdBy: "PLUG-IN 007",
    Documentation: "https://documenter.getpostman.com/view/9637572/TWDUqJXJ"
  }
  res.status(200).json(resObject);
});

module.exports = welcomeRouter;
