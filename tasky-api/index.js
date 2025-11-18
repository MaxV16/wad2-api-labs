import dotenv from 'dotenv';
import express from 'express';
import tasksRouter from './api/tasks';
import './db';


dotenv.config();

const app = express();

app.use(express.static('public'));

const port = process.env.PORT;

app.use(express.json());

app.use('/api/tasks', tasksRouter);

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.info(`Server running at ${port}`);
});