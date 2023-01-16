const http = require('http');

const courses = [
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'JavaScript',
  },
];

const server = http.createServer((req, res) => {
  const url = req.url; // what?
  const method = req.method; // how?
  if (url === '/courses') {
    if (method === 'GET') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(courses));
    } else if (method === 'POST') {
      const body = [];

      req.on('data', (chunk) => {
        console.log(chunk);
        body.push(chunk);
      });

      req.on('end', () => {
        const bodyString = Buffer.concat(body).toString();
        const course = JSON.parse(bodyString);
        courses.push(course);
        res.writeHead(201);
        res.end();
      });
    }
  }
});

server.listen(3000);
