//* core module
const path = require("path");

const express = require("express");

// const rootDir = require("../util/pathUtil");

const { registerHomes } = require("./hostRouter");
const { getHomePage, getHomes, getHomeDetails, getFav, postAddFav } = require("../controllers/storeController");

const storeRouter = express.Router();

storeRouter.get("/", getHomePage);
storeRouter.get("/homes", getHomes);
storeRouter.get("/homes/:homeIdentity", getHomeDetails);
storeRouter.get("/favourites", getFav);
storeRouter.post("/favourites", postAddFav);

module.exports = storeRouter;