import { Router } from 'express';
import validateGame from '../middleware/validateGame.js';
import startGame from '../controllers/startGame.js';

const game = Router();

game.post('/', validateGame, startGame);

export default game;
