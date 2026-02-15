import type { Request, Response } from 'express';
import { prisma } from '../../lib/prisma.js';

export default async function getAllAttempts(req: Request, res: Response) {
  try {
    const records = await prisma.attempt.findMany({
      orderBy: [
        {
          attemptDuration: 'asc',
        },
      ],
      where: { status: 'COMPLETED' },
      select: {
        name: true,
        attemptDuration: true, // assuming this is the "time"
        clicks: true,
        score: true,
        attemptDate: true,
        levelName: true,
      },
    });

    // Alter bigint in to string because json cant serialize it
    const safeRecords = records.map((r) => ({
      ...r,
      attemptDuration: r.attemptDuration.toString(), // BigInt -> string
    }));

    return res.status(200).json({ safeRecords });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: 'Failed to fetch attempts',
      code: 'ATTEMPTS_FETCH_ERROR',
    });
  }
}
