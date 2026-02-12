import { Router } from 'express';
import validateAttempt from '../middleware/validateAttempt.js';
import registerAttempt from '../controllers/registerAttempt.js';

const attempt = Router();

attempt.post('/', validateAttempt, registerAttempt);

export default attempt;
