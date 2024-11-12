const http = require("http");

const { handler } = require("./RequestHandler");

const server = http.createServer(handler);

const PORT = 7000;

server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
