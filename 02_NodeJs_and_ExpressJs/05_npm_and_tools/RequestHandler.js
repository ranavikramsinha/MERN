const fs = require("fs");
const {URLSearchParams} = require("url");

const RequestHandler = (request, response) => {
    console.log("Request received", request.url, request.method);
  
    response.setHeader("Content-Type", "text/html");

    //* learing debugging tool
    // let arr = [1, 2, 3, 4, 5];
    // for(let i = 0; i < arr.length; i++){
    //   console.log(arr[i]);
    // }

  
    if (request.url === "/") {
      response.write(
        `<!DOCTYPE html>
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
          </html>`
      );

      response.end();
    } else if (request.url.toLowerCase() === "/buy-product") {
      console.log("Form Data Received");
      const buffer = [];
      request.on('data', (chunk) => {
          // console.log(chunk);
          // console.log(chunk.toString());
          buffer.push(chunk);
      })
  
      request.on('end', () => {
          // console.log(buffer.length);
          const body = Buffer.concat(buffer).toString();
          // console.log(body);
  
          const urlParams = new URLSearchParams(body);
          const bodyJson = {};
          for(const [key, value] of urlParams.entries()){
            bodyJson[key] = value;
          }
          // console.log(bodyJson);
          // console.log(Object.keys(bodyJson).length);
  
          // fs.writeFileSync('buy.txt', JSON.stringify(bodyJson));
          fs.writeFile('buy.txt', JSON.stringify(bodyJson), (err) => {
            if (err) {
              console.error("File write failed", err);
              response.statusCode = 500;
              response.write("<h1>Internal Server Error</h1>");
              response.end();
              return;
            }

              response.statusCode = 302;
              response.setHeader('Location', '/products');
              response.end();
              console.log("Sending Response");
          });

      })
  
      // fs.writeFileSync('buy.txt', 'Myntra App');
      // response.statusCode = 302;
      // response.setHeader('Location', '/products');
      // console.log("Sending Response");
  
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

      response.end();
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

      response.end();
    }
  
    // response.end();
  };

  // module.exports = {
  //   handler: RequestHandler,
  // };

  exports.handler = RequestHandler;

//* same as above code
// const fs = require("fs");
// const { URLSearchParams } = require("url");

// const RequestHandler = (request, response) => {
//   console.log("Request received", request.url, request.method);

//   response.setHeader("Content-Type", "text/html");

//   if (request.url === "/") {
//     response.write(
//       `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <meta charset="UTF-8">
//           <meta name="viewport" content="width=device-width, initial-scale=1.0">
//           <title>Myntra</title>
//         </head>
//         <body style="background-color: #222222; color: #ffffff;">
//           <h1>Search Your Product</h1>
//           <form action="/buy-product" method="POST">
//             <input type="text" name="product-search" placeholder="Enter The Product Name">
//             <div></div>
//             <input type="text" name="budget" placeholder="Enter Your Budget">
//             <input type="submit" value="Search">
//           </form>
//         </body>
//         </html>`
//     );
//     response.end();
//   } else if (request.url.toLowerCase() === "/buy-product") {
//     console.log("Form Data Received");
//     const buffer = [];
//     request.on("data", (chunk) => {
//       buffer.push(chunk);
//     });

//     request.on("end", () => {
//       const body = Buffer.concat(buffer).toString();
//       const urlParams = new URLSearchParams(body);
//       const bodyJson = {};
//       for (const [key, value] of urlParams.entries()) {
//         bodyJson[key] = value;
//       }
//       console.log(bodyJson);

//       fs.writeFile("buy.txt", JSON.stringify(bodyJson), (err) => {
//         if (err) {
//           console.error("File write failed", err);
//           response.statusCode = 500;
//           response.write("<h1>Internal Server Error</h1>");
//           response.end();
//           return;
//         }
//         response.statusCode = 302;
//         response.setHeader("Location", "/products");
//         response.end();
//       });
//     });
//   } else if (request.url.toLowerCase() === "/products") {
//     response.write(
//       `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <title>Products</title>
//         </head>
//         <body style="background-color: #222222; color: #ffffff;">
//           <h1>Products List Page</h1>
//         </body>
//         </html>`
//     );
//     response.end();
//   } else {
//     response.statusCode = 404;
//     response.write(
//       `<!DOCTYPE html>
//         <html lang="en">
//         <head>
//           <title>404 Not Found</title>
//         </head>
//         <body style="background-color: #222222; color: #ffffff;">
//           <h1>404 Error: Page Not Found</h1>
//           <a href="/" style="color: #ffffff;">Go Back to Home</a>
//         </body>
//         </html>`
//     );
//     response.end();
//   }
// };

// exports.handler = RequestHandler;
