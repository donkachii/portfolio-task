const http = require("http");
var fs = require("fs");

const server = http.createServer((req, res) => {
  const pathname = req.url;
  if (pathname === "/" || pathname === "/home") {
    fs.readFile("index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (pathname === "/about") {
    fs.readFile("about.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (pathname === "/contact") {
    fs.readFile("contact.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(3000);
console.log(`The HTTP Server is running on port 3000`);
