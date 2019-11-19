import {Request, Response, NextFunction} from 'express';

export function serverError(err: any, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  return res.render('error', {title: 'Sorry', err});
}
