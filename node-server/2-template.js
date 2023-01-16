const http = require('http');
const ejs = require('ejs');
//const http2 = require('http2'); // https

const name = 'Ellie';
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
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');

  switch (url) {
    case '/':
      ejs
        .renderFile('./template/welcome.ejs', { name })
        .then((data) => res.end(data))
        .catch(console.error);
      break;

    case '/courses':
      ejs
        .renderFile('./template/courses.ejs', { courses })
        .then((data) => res.end(data))
        .catch(console.error);
      break;

    default:
      ejs
        .renderFile('./template/not-found.ejs', { name })
        .then((data) => res.end(data))
        .catch(console.error);
      break;
  }
});

server.listen(3000);
