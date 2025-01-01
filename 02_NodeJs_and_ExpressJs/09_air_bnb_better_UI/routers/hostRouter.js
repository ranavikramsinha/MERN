//* core module
// const path = require("path");

const express = require("express");

// const rootDir = require("../util/pathUtil");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "addHome.html"));
  res.render("addHome", {pageTitle: "Add Home"});
});

const registerHomes = [];
  
hostRouter.post("/add-home", (req, res, next) => {
  registerHomes.push(req.body);
  // console.log(registerHomes);
  res.render("homeAdded", {pageTitle: "Home Added"});
  // res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

exports.hostRouter = hostRouter;

exports.registerHomes = registerHomes;
  