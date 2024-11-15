const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Request Received", req.url, req.method, req.body);
  next();
});



app.use((req, res, next) => {
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

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
