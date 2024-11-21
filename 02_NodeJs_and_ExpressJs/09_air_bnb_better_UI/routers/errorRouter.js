//* core module
const path = require("path");

const express = require("express");

const rootDir = require("../util/pathUtil");

const errorRouter = express.Router();

errorRouter.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, "views", "404error.html"));
  });

module.exports = errorRouter;