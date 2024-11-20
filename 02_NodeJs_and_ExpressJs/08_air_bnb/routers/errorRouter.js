//* core module
const path = require("path");

const express = require("express");

const errorRouter = express.Router();

errorRouter.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "views", "404error.html"));
  });

module.exports = errorRouter;