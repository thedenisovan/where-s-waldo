import type { Request, Response, NextFunction } from 'express';

function validateGame(req: Request, res: Response, next: NextFunction) {
  const { name, recordsId } = req.body ?? {};

  if (!name || !recordsId) {
    return res
      .status(400)
      .json({ message: 'Provide req.body.name and req.body.recordsId value' });
  }

  next();
}

export default validateGame;
