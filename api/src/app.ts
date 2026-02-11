import express from 'express';
import 'dotenv/config';
import pirates from './routes/pirates.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for forms

app.use('/', pirates);

export default app;
