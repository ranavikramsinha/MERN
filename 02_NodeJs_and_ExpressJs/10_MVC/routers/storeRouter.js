//* core module
const path = require("path");

const express = require("express");

// const rootDir = require("../util/pathUtil");

const { registerHomes } = require("./hostRouter");
const { getHomePage } = require("../controllers/storeController");

const storeRouter = express.Router();

storeRouter.get("/", getHomePage);

module.exports = storeRouter;