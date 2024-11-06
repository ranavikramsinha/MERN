const http = require('http');

console.log("Hi there!");

const requestHandler = (request, response) => {
    // console.log("Request received", request.url, request.method, request.headers);

    // response.setHeader('Content-Type', 'text/html');
    // response.write('<!DOCTYPE html>')
    // response.write('<html lang="en">');
    // response.write('<head><title>My First Page</title></head>');
    // response.write('<body style="background-color: #222222; color: #ffffff;"><h1>Hello from my Node.js Server</h1></body>');
    // response.write('</html>');
    response.write(`<!DOCTYPE html><html lang="en"><head><title>My First Page</title></head><body style="background-color: #222222; color: #ffffff;"><h1>Hello from my Node.js Server</h1></body></html>`);
    response.end();
}

const server = http.createServer(requestHandler);

const PORT = 7000;

server.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
});