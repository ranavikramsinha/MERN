//* core module
const path = require("path");

const express = require("express");

const rootDir = require("../util/pathUtil");

const errorRouter = express.Router();

errorRouter.use((req, res, next) => {
    // res.status(404).sendFile(path.join(rootDir, "views", "404error.html"));
    res.statusCode = 404;
    res.render("404error", { pageTitle: "404 Error"});
  });

module.exports = errorRouter;