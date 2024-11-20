const express = require("express");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
    res.send(
      `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Add Home</title>
          </head>
          <body style="background-color: #222222; color: #ffffff;">
            <h1>Add Your Home</h1>
            <form action="/add-home" method="post">
              <input
                type="text"
                name="houseName"
                id="houseName"
                placeholder="Enter your home name"
              />
              <input type="submit" value="Add Home" name="submit-home-name" id="submit-home-name">
            </form>
          </body>
        </html>
      `
    );
  });
  
hostRouter.post("/add-home", (req, res, next) => {
    console.log(req.body);
    res.send(
      `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home Added</title>
        </head>
        <body style="background-color: #222222; color: #ffffff;">
            <h1>Home Added Successfully</h1>
            <a href="/">Go to Home</a>
        </body>
        </html>
      `
    );
});

module.exports = hostRouter;
  