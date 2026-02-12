import { Request, Response, NextFunction } from 'express';

// Validates that user post attempt is valid
function validateAttempt(req: Request, res: Response, next: NextFunction) {
  const { coordsX, coordsY, levelName, characterId, attemptId } =
    req.body ?? {};

  if (!coordsX || !coordsY || !levelName || !characterId || !attemptId)
    return res.status(400).json({ message: 'Provide req body attributes. ' });

  next();
}

export default validateAttempt;
