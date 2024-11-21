const express = require("express");
const path = require('path');
const fs = require("fs");
const bodyParser = require("body-parser");

//* local module
const hostRouter = require('./routers/hostRouter');
const storeRouter = require('./routers/storeRouter');
const errorRouter = require('./routers/errorRouter');
const rootDir = require("./util/pathUtil");

const app = express();

app.use(express.static(path.join(rootDir, "public")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Request Received", req.url, req.method, req.body);
  next();
});

app.use(storeRouter);
app.use("/host", hostRouter);
app.use(errorRouter);

const PORT = 7001;

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
