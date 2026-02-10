import express from 'express';
import 'dotenv/config';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for forms

app.get('/', (req, res) => {
  res.send('hello world!');
});

export default app;
