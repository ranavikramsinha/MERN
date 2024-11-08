const http = require("http");
const fs = require("fs");

const requestHandler = (request, response) => {
  console.log("Request received", request.url, request.method);

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
  } else if (request.url.toLowerCase() === "/buy-product") {
    console.log("Form Data Received");
    const buffer = [];
    request.on('data', (chunk) => {
        console.log(chunk);
        // console.log(chunk.toString());
        buffer.push(chunk);
    })

    request.on('end', () => {
        console.log(buffer.length);
        const body = Buffer.concat(buffer).toString();
        // console.log(body);

        const urlParams = new URLSearchParams(body);
        const bodyJson = {};
        for(const [key, value] of urlParams.entries()){
          bodyJson[key] = value;
        }
        // console.log(bodyJson);
        // console.log(Object.keys(bodyJson).length);

        fs.writeFileSync('buy.txt', JSON.stringify(bodyJson));
    })

    // fs.writeFileSync('buy.txt', 'Myntra App');
    response.statusCode = 302;
    response.setHeader('Location', '/products');
    console.log("Sending Response");

  } else if (request.url.toLowerCase() === "/products") {
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
    response.statusCode = 404;
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
