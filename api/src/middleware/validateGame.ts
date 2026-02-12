import type { Request, Response, NextFunction } from 'express';

// Validates that game starts with correct attributes
function validateGame(req: Request, res: Response, next: NextFunction) {
  const { levelName } = req.body || {};

  if (!levelName)
    return res.status(400).json({ message: 'Provide req.body attributes.' });
  else if (typeof levelName !== 'string')
    return res
      .status(400)
      .json({ message: 'req.body attributes must be string format.' });

  next();
}

export default validateGame;
