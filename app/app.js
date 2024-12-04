const http = require("http");
const os = require("os");

const PORT = 8000;

const author = process.env.AUTHOR;
const uuid = process.env.UUID;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");

  if (req.method === "GET" && req.url === "/hostname") {
    res.writeHead(200);
    res.end(JSON.stringify({ hostname: os.hostname() }));
  } else if (req.method === "GET" && req.url === "/author") {
    res.writeHead(200);
    res.end(JSON.stringify({ author: author }));
  } else if (req.method === "GET" && req.url === "/id") {
    res.writeHead(200);
    res.end(JSON.stringify({ id: uuid }));
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});