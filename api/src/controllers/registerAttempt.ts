import 'dotenv/config';
import { prisma } from '../../lib/prisma.js';
import { NextFunction, Request, Response } from 'express';

async function registerAttempt(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { coordsX, coordsY, levelName, characterId, attemptId } = req.body;

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

    if (
      attempt[`char${id}Alive`] === true &&
      coordsX >= Number(process.env[`${level}_${id}_X_MIN`]!) &&
      coordsX <= Number(process.env[`${level}_${id}_X_MAX`]!) &&
      coordsY >= Number(process.env[`${level}_${id}_Y_MIN`]!) &&
      coordsY <= Number(process.env[`${level}_${id}_Y_MAX`]!)
    ) {
      console.log(coordsX);
      console.log(coordsY);
      await prisma.attempt.update({
        where: { id: attemptId },
        data: { [`char${id}Alive`]: false },
      });

      next();
      // If user did not make  guess in correct coordinates
    } else {
      console.log(coordsX);
      console.log(coordsY);
      await prisma.attempt.update({
        where: { id: attemptId },
        data: { clicks: attempt.clicks + 1 },
      });

      return res.status(200).json({ message: 'MISS' });
    }
  } catch {
    res.status(500).json({ message: 'Internal server/db error.' });
  }
}

export default registerAttempt;
