const http = require('http');
const fs = require('fs');
const path = require('path');
//const http2 = require('http2'); // https

const server = http.createServer((req, res) => {
  console.log('incoming...');
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);

  const url = req.url;
  res.setHeader('Content-Type', 'text/html');

  switch (url) {
    case '/':
      fs.createReadStream('./html/welcome.html').pipe(res);
      break;

    case '/courses':
      fs.createReadStream('./html/courses.html').pipe(res);
      break;

    default:
      fs.createReadStream('./html/not-found.html').pipe(res);
      break;
  }
});

server.listen(3000);
