import express from 'express';
import game from './routes/game.js';
import attempt from './routes/attempt.js';
import cors from 'cors';
import completeGame from './routes/completeGame.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for forms

app.use('/', game);
app.use('/attempt', attempt);
app.use('/complete', completeGame);

export default app;
