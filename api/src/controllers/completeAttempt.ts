import { prisma } from '../../lib/prisma.js';
import { Request, Response } from 'express';

async function completeAttempt(req: Request, res: Response) {
  const { attemptId, name } = req.body;

  try {
    const attempt = await prisma.attempt.update({
      where: { id: attemptId },
      data: { name: name },
    });

    res.status(200).json({ message: 'Attempt completed,' });
  } catch {
    res.status(500).json({ message: 'Internal server/db error' });
  }
}

export default completeAttempt;
