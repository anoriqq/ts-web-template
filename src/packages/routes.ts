import {Router, Request, Response, NextFunction} from 'express';

const router = Router();

import {root} from './root/route';
router.use('/', root);

export {router};
