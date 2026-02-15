import { Router } from 'express';
import completeAttempt from '../controllers/completeAttempt.js';

const completeGame = Router();

completeGame.post('/', completeAttempt);

export default completeGame;
