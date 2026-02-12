import 'dotenv/config';
import { prisma } from '../../lib/prisma.js';
import { NextFunction, Request, Response } from 'express';

async function registerAttempt(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const {
    coordsXMin,
    coordsXMax,
    coordsYMin,
    coordsYMax,
    levelName,
    characterId,
    attemptId,
  } = req.body;

  const id: 1 | 2 | 3 = characterId;
  const level: 'PIRATES' | 'AIRPORT' | 'LIBRARY' = levelName.toUpperCase();

  try {
    const attempt = await prisma.attempt.findUnique({
      where: { id: attemptId },
    });

    if (!attempt)
      return res
        .status(404)
        .json({ message: 'Attempt with given id not found in db' });

    if (level && id) {
      if (
        attempt[`char${id}Alive`] &&
        coordsXMin >= Number(process.env[`${level}_${id}_X_MIN`]!) &&
        coordsXMax <= Number(process.env[`${level}_${id}_X_MAX`]!) &&
        coordsYMin >= Number(process.env[`${level}_${id}_Y_MIN`]!) &&
        coordsYMax <= Number(process.env[`${level}_${id}_Y_MAX`]!)
      ) {
        await prisma.attempt.update({
          where: { id: attemptId },
          data: { [`char${id}Alive`]: false },
        });
      }
      // If user did not make  guess in correct coordinates
    } else {
      await prisma.attempt.update({
        where: { id: attemptId },
        data: { clicks: attempt.clicks + 1 },
      });

      return res.status(200).json({ message: 'MISS' });
    }

    next();
  } catch {
    res.status(500).json({ message: 'Internal server/db error.' });
  }
}

export default registerAttempt;
