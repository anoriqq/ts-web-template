import {Router} from 'express';
import debug from 'debug';

const root = Router();
const log = debug('app:root');

root.get('/', (req, res, next) => {
  const {code} = req.query;
  log(`code: ${code}`);
  res.render('root', {
    title: 'root',
  });
});

export {root};
