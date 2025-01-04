//* core module
const path = require("path");

const express = require("express");

const rootDir = require("../util/pathUtil");
const { get404Error } = require("../controllers/errorController");

const errorRouter = express.Router();

errorRouter.use(get404Error);

module.exports = errorRouter;