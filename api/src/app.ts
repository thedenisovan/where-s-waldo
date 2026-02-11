import express from 'express';
import game from './routes/game.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for forms

app.use('/', game);

export default app;
