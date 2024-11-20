const express = require("express");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
    res.send(
      `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Air Bnb</title>
      </head>
      <body style="background-color: #222222; color: #ffffff;">
          <h1>Welcome to Air Bnb</h1>
          <a href="/host/add-home">Add Your Home</a>
      </body>
      </html>
      `
    );
  });

module.exports = storeRouter;