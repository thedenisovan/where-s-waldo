import 'dotenv/config';
import { prisma } from '../../lib/prisma.js';
import type { Request, Response } from 'express';

async function startGame(req: Request, res: Response) {
  try {
    const attempt = await prisma.attempt.create({
      data: {
        startTime: Date.now(),
        endTime: 0,
        name: '',
        attemptDuration: 0,
        score: 0,
        levelName: req.body.levelName.toUppercase(),
      },
    });

    res.status(200).json({ attemptId: attempt.id });
  } catch {
    res.status(500).json({ message: 'Internal database/server error' });
  }
}

export default startGame;
