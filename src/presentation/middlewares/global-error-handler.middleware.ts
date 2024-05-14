import { NextFunction, Response, Request } from 'express';

import { Logger } from '../../config';

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  new Logger().showError(err);

  return res.status(500).send(err);
};
