const express = require("express");
const welcomeRouter = express.Router();

welcomeRouter.get("/", (_, res) => {
  const resObject = {
    message: "Welcome to Ujian Chunin Week2",
    status: 200,
    createdBy: "PLUG-IN 007",
  }
  res.status(200).json(resObject);
});

module.exports = welcomeRouter;
