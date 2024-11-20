const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

//* local module
const hostRouter = require('./hostRouter');
const storeRouter = require('./storeRouter');
const errorRouter = require('./errorRouter');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Request Received", req.url, req.method, req.body);
  next();
});

app.use(storeRouter);
app.use(hostRouter);
app.use(errorRouter);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
