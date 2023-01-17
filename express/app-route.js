import express from 'express';
import postRouter from './router/post.js';
import userRouter from './router/user.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({ origin: ['http://localhost:5500'] }));
app.use(helmet());

app.use('/posts', postRouter);
app.use('/users', userRouter);

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.end('Welcome!');
});

app.listen(3000);
