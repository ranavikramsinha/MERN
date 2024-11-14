//* core module
// const http = require("http");

//* local module
// const { handler } = require("./reqHandler");

//* external module
const express = require("express");

const fs = require("fs");
const {URLSearchParams} = require("url");

const app = express();

// app.use("/", (req, res, next) => {
//   console.log("First Middleware", req.url, req.method);
//   next();
// });

// app.use("/submit-details", (req, res, next) => {
//   console.log("Second Middleware", req.url, req.method);
//   res.send("<h1>Submit Page</h1>");
// });

// app.use("/", (req, res, next) => {
//   console.log("Second Middleware", req.url, req.method);
//   res.send("<h1>Hello from Second Middleware</h1>");
// });

// app.get("/", (req, res, next) => {
//   console.log("First Middleware", req.url, req.method);
//   next();
// });

// app.get("/test", (req, res, next) => {
//   console.log("Second Middleware", req.url, req.method);
//   res.send("<h1>Hello from Second Middleware</h1>");
// });

app.get((req, res, next) => {
  console.log("Request Received", req.url, req.method);
  next();
});

app.get("/", (req, res, next) => {
  res.send(`<!DOCTYPE html>
          <html lang="en">
          <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>First Server</title>
          </head>
          <body style="background-color: #222222; color: #ffffff;">
          <h1>Search Your Product</h1>
          <form action="/buy-product" method="POST">
          <input type="text" name="product-search" placeholder="Enter The Product Name">
          <div></div>
          <input type="text" name="budget" placeholder="Enter The Your Budget">
          <input type="submit" value="Search">
          </form>
          </body>
          </html>
      `);
});

app.post("/buy-product", (req, res, next) => {
  console.log("Form Data Received");
  const buffer = [];
  req.on("data", (chunk) => {
    buffer.push(chunk);
  });

  req.on("end", () => {
    const body = Buffer.concat(buffer).toString();
    const urlParams = new URLSearchParams(body);
    const bodyJson = {};

    for (const [key, value] of urlParams.entries()) {
      bodyJson[key] = value;
    }

    fs.writeFile("buy.txt", JSON.stringify(bodyJson), (err) => {
      if (err) {
        console.error("File write failed", err);
        res.statusCode = 500;
        res.write("<h1>Internal Server Error</h1>");
        res.end();
        return;
      }

      res.statusCode = 302;
      res.setHeader("Location", "/products");
      res.end();
      console.log("Sending Response");
    });
  });
});

app.get("/products", (req, res, next) => {
  res.send(
    `<!DOCTYPE html>
          <html lang="en"><head>
          <title>Products</title>
          </head>
          <body style="background-color: #222222; color: #ffffff;">
          <h1>Products List Page</h1>
          </body>
          </html>`
  );
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

// const server = http.createServer(app);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
