import 'dotenv/config';
import { prisma } from '../../lib/prisma.js';
import { Request, Response, NextFunction } from 'express';

async function registerAttempt(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  try {
  } catch {
    res.status(500).json({ message: 'Internal database/server error' });
  }
}

export default registerAttempt;
