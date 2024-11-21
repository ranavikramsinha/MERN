//* core module
const path = require("path");

const express = require("express");

const rootDir = require("../util/pathUtil");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
    res.sendFile(path.join(rootDir, "views", "homePage.html"));
  });

module.exports = storeRouter;