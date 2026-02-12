import { Router } from 'express';
import validateAttempt from '../middleware/validateAttempt.js';
import successfulAttempt from '../controllers/successfulAttempt.js';
import registerAttempt from '../controllers/successfulAttempt.js';

const attempt = Router();

attempt.post('/', validateAttempt, registerAttempt, successfulAttempt);

export default attempt;
