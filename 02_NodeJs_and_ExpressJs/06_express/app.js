//* core module
// const http = require("http");

//* local module
// const { handler } = require("./reqHandler");

//* external module
const express = require("express");

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

app.get("/", (req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});

app.get("/test", (req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  res.send("<h1>Hello from Second Middleware</h1>");
});

// const server = http.createServer(app);

const PORT = 7000;

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
