import express from 'express';
import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import usersRoutes from './router/users';
import dotenv from 'dotenv';

dotenv.config({});

const app = express();

app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1/users', usersRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
  res.end();
});

app.listen(8080);

export default app;
