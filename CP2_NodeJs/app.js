const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "0.0.0.0";
const port = 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Erro ao carregar o arquivo HTML.");
    } else {
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});