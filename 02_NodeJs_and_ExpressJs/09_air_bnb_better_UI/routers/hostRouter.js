//* core module
const path = require("path");

const express = require("express");

const rootDir = require("../util/pathUtil");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addHome.html"));
});
  
hostRouter.post("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

module.exports = hostRouter;
  