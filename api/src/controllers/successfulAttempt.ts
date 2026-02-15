import 'dotenv/config';
import { prisma } from '../../lib/prisma.js';
import { Request, Response } from 'express';

// If user did found character in correct coords this mw is being called.
async function successfulAttempt(req: Request, res: Response) {
  try {
    const attempt = await prisma.attempt.findUnique({
      where: { id: req.body.attemptId },
    });

    if (!attempt)
      return res
        .status(404)
        .json({ message: 'No attempt prisma model found.' });

    // If user finds character update this attempt
    const updatedAttempt = await prisma.attempt.update({
      where: { id: req.body.attemptId },
      data: {
        charactersFound: attempt.charactersFound + 1,
        clicks: attempt.clicks + 1,
      },
    });

    // If user founds all characters
    if (updatedAttempt.charactersFound >= 3) {
      await prisma.attempt.update({
        where: { id: req.body.attemptId },
        data: {
          endTime: Date.now(),
          attemptDuration: BigInt(Date.now()) - updatedAttempt.startTime,
          status: 'COMPLETED',
        },
      });

      return res
        .status(200)
        .json({
          message: 'COMPLETED',
          char1: updatedAttempt.char1Alive,
          char2: updatedAttempt.char2Alive,
          char3: updatedAttempt.char3Alive,
        });
    }

    return res.status(200).json({
      message: 'HIT',
      char1: updatedAttempt.char1Alive,
      char2: updatedAttempt.char2Alive,
      char3: updatedAttempt.char3Alive,
    });
  } catch {
    res.status(500).json({ message: 'Internal database/server error' });
  }
}

export default successfulAttempt;
