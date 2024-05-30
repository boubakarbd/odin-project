const http = require("node:http");
const net = require("node:net");
const { URL } = require("node:url");
const fs = require("fs");
const { readFile } = require("node:fs");

const app = http.createServer((req, res) => {
  if (req.url === "/index.html") {
    readFile("./index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" }).end(data);
    });
  } else if (req.url === "/contact-me.html") {
    readFile("./contact-me.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-type": "text/html" }).end(data);
    });
  } else if (req.url === "/about.html") {
    readFile("./about.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" }).end(data);
    });
  } else {
    readFile("./404.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" }).end(data);
    });
  }
});

app.listen(8080);
