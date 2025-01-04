//* core module
const path = require("path");

const express = require("express");

// const rootDir = require("../util/pathUtil");

const { registerHomes } = require("./hostRouter");
const { getHomePage, getHomes } = require("../controllers/storeController");

const storeRouter = express.Router();

storeRouter.get("/", getHomePage);
storeRouter.get("/homes", getHomes);

module.exports = storeRouter;