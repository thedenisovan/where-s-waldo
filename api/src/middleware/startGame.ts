import { prisma } from '../../lib/prisma.js';
import type { Request, Response } from 'express';
import 'dotenv/config';

async function startGame(req: Request, res: Response) {
  const { level } = req.body;
}
