import {generate} from 'shortid'
import {Response, Request, NextFunction} from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
    req.body.id= generate();
    next();
}