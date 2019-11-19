import {Request, Response, NextFunction} from 'express';

export function notFoundError(req: Request, res: Response, next: NextFunction) {
  res.status(404);

  if (req.accepts('html')) {
    res.render('404', {
      error: 'Not found',
      title: 'Not found',
      message: 'ページが見つかりません',
    });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    return res.send({error: 'Not found', message: 'ページが見つかりません'});
  }

  // default to plain-text. send()
  return res.type('txt').send('Not found');
}
