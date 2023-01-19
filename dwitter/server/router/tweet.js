import express from 'express';

let idNext = 2;

const tweets = [
  {
    id: 1,
    text: '드림코딩에서 강의 들으면 너무 좋으다',
    createdAt: '2021-05-09T04:20:57.000Z',
    name: 'Bob',
    username: 'bob',
    url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
  },
];

const tweetRouter = express.Router();

tweetRouter.get('/', (req, res, next) => {
  const { username } = req.query;

  if (!username) {
    res.status(200).json(tweets);
    return;
  }

  const tweetsByUsername = tweets.filter(
    (tweet) => tweet.username === username
  );
  res.status(200).json(tweetsByUsername);
});

tweetRouter.get('/:id', (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'params(id) should be number' });
  }

  const index = tweets.findIndex((tweet) => tweet.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: 'there is no match tweet' });
  }

  res.status(200).json(tweets[index]);
});

tweetRouter.post('/', (req, res, next) => {
  const { text, username, name, url } = req.body;
  tweets.push({
    id: idNext++,
    text,
    createdAt: new Date().toISOString(),
    name,
    username,
    url,
  });
  res.sendStatus(201);
});

tweetRouter.put('/:id', (req, res, next) => {
  const { id } = req.params;
  const { text } = req.body;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'params(id) should be number' });
  }

  const index = tweets.findIndex((tweet) => tweet.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: 'there is no match tweet' });
  }

  tweets.splice(index, 1, { ...tweets[index], text });
  return res.sendStatus(200);
});

tweetRouter.delete('/:id', (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: 'params(id) should be number' });
  }

  const index = tweets.findIndex((tweet) => tweet.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: 'there is no match tweet' });
  }

  tweets.splice(index, 1);
  return res.sendStatus(204);
});

export default tweetRouter;
