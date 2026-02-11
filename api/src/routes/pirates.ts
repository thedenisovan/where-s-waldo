import { Router } from 'express';
import validateGame from '../middleware/validateGame.js';
import startGame from '../controllers/startGame.js';

const pirates = Router();

pirates.post('/', validateGame, startGame);

export default pirates;
