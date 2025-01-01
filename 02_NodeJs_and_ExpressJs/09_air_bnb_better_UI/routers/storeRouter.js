//* core module
const path = require("path");

const express = require("express");

// const rootDir = require("../util/pathUtil");

const { registerHomes } = require("./hostRouter");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
    console.log(registerHomes);
    // res.sendFile(path.join(rootDir, "views", "homePage.html"));
    res.render("homePage", { homes: registerHomes, pageTitle: "Airbnb"});
  });

module.exports = storeRouter;