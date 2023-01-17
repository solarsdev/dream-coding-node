import express from 'express';

const app = express();

app
  .route('/posts')
  .get((req, res, next) => {
    res.status(200).send('GET: /posts');
  })
  .post((req, res, next) => {
    res.status(201).send('POST: /posts');
  });

app
  .route('/posts/:id')
  .put((req, res) => {
    res.status(201).send('PUT: /posts/:id');
  })
  .delete((req, res) => {
    res.status(200).send('DELETE: /posts/:id');
  });

app.listen(3000);
