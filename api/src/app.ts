import express from 'express';
import game from './routes/game.js';
import attempt from './routes/attempt.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for forms

app.use('/', game);
app.use('/attempt', attempt);

export default app;
