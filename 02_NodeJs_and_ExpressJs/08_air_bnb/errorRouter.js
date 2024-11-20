const express = require("express");

const errorRouter = express.Router();

errorRouter.use((req, res, next) => {
    res.statusCode = 404;
    res.write(
      `<!DOCTYPE html>
        <html lang="en"><head>
        <title>Products</title>
        </head>
        <body style="background-color: #222222; color: #ffffff;">
        <h1>404 Error! Page Not Found</h1>
        </body>
        </html>`
    );
  
    res.end();
  });

module.exports = errorRouter;