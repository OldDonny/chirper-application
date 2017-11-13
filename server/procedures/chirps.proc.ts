import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import { data } from '../index';

export const create = (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
        throw new Error('there is no chirp');
    }

    fs.readFile(data, 'utf-8', (err: Error, file: string) => {
        const chirps: Array<models.IChirp> = JSON.parse(file);

        chirps.push(req.body); 

        fs.writeFile(data, JSON.stringify(chirps), (err: Error) => {
            if (err) throw err;

            res.status(201).json(req.body.id);
        });
    });
};

export const all = (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(data, 'utf-8', (err: Error, file: string) => {
        if (err) throw err;

        const parsed: Array<models.IChirp> = JSON.parse(file);
        res.json(parsed);
    });
};

export const update = (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(data, 'utf-8', (err: Error, file: string) => {
        if (err) throw err;

        const chirp: models.IChirp = req.body;
        const chirps: Array<models.IChirp> = JSON.parse(file);

        const altered = chirps.find((c: models.IChirp): boolean => {
            if (c.id === chirp.id) {
                c.message = chirp.message;
                return true;
            }

            return false;
        });

        fs.writeFile(data, JSON.stringify(chirps), (err: Error) => {
            if (err) throw err;

            res.send(altered);
        });
    });
};

export const read = (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(data, 'utf-8', (err: Error, file: string) => {
        if (err) throw err;

        const chirps: Array<models.IChirp> = JSON.parse(file);

        const found: models.IChirp | undefined = chirps.find((c: models.IChirp) => c.id === req.params.id);

        res.json(found);
    });
};

export const destroy = (req: Request, res: Response, next: NextFunction) => {
    fs.readFile(data, 'utf-8', (err: Error, file: string) => {
        if (err) throw err;

        const chirps: Array<models.IChirp> = JSON.parse(file);

        const found: number = chirps.findIndex((c: models.IChirp) => c.id === req.params.id);

        chirps.splice(found, 1);

        fs.writeFile(data, JSON.stringify(chirps), (err: Error) => {
            if (err) throw err;

            res.end();
        });
    });
};