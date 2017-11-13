import { Request,Response, NextFunction } from "express-serve-static-core";
import { procedure } from "../db/index";
import procedures from '../procedures/users.proc';



export const all = (req: Request, res: Response, next: NextFunction) =>{
    procedures.all()
        .then((sets) => {
            res.json(sets);
        });
};

export const single =( req: Request, res: Response, next:NextFunction) =>{
    procedures.single(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};

export const create=( req: Request, res: Response, next: NextFunction) =>{
    procedures.create(req.body.username, req.body.email, req.body.password)
        .then((sets) => {
            res.json(sets);
        });
};



export const destroy =( req: Request, res: Response, next:NextFunction) =>{
    procedures.destroy(+req.params.id)
        .then((sets) => {
            res.json(sets);
        });
};