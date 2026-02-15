import { Router } from 'express';
import completeAttempt from '../controllers/completeAttempt.js';
import getAllAttempts from '../controllers/getAllAttempts.js';

const completeGame = Router();

completeGame.post('/', completeAttempt);
completeGame.get('/', getAllAttempts);

export default completeGame;
