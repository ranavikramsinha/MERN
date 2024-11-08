const http = require("http");

console.log("Hi there!");

const requestHandler = (request, response) => {
  console.log("Request received", request.url, request.method, request.headers);

  response.setHeader("Content-Type", "text/html");

  if (request.url === "/") {
    response.write(
      `<!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Myntra</title>
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
        </html>`
    );
  } else if (request.url === "/products") {
    response.write(
      `<!DOCTYPE html>
        <html lang="en"><head>
        <title>Products</title>
        </head>
        <body style="background-color: #222222; color: #ffffff;">
        <h1>Products List Page</h1>
        </body>
        </html>`
    );
  } else {
    response.write(
      `<!DOCTYPE html>
        <html lang="en"><head>
        <title>Products</title>
        </head>
        <body style="background-color: #222222; color: #ffffff;">
        <h1>404 Error Page Not Found</h1>
        </body>
        </html>`
    );
  }

  response.end();
};

const server = http.createServer(requestHandler);

const PORT = 7000;

server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
