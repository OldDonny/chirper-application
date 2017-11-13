"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const index_1 = require("../index");
exports.create = (req, res, next) => {
    if (!req.body) {
        throw new Error('there is no chirp');
    }
    fs.readFile(index_1.data, 'utf-8', (err, file) => {
        const chirps = JSON.parse(file);
        chirps.push(req.body);
        fs.writeFile(index_1.data, JSON.stringify(chirps), (err) => {
            if (err)
                throw err;
            res.status(201).json(req.body.id);
        });
    });
};
exports.all = (req, res, next) => {
    fs.readFile(index_1.data, 'utf-8', (err, file) => {
        if (err)
            throw err;
        const parsed = JSON.parse(file);
        res.json(parsed);
    });
};
exports.update = (req, res, next) => {
    fs.readFile(index_1.data, 'utf-8', (err, file) => {
        if (err)
            throw err;
        const chirp = req.body;
        const chirps = JSON.parse(file);
        const altered = chirps.find((c) => {
            if (c.id === chirp.id) {
                c.message = chirp.message;
                return true;
            }
            return false;
        });
        fs.writeFile(index_1.data, JSON.stringify(chirps), (err) => {
            if (err)
                throw err;
            res.send(altered);
        });
    });
};
exports.read = (req, res, next) => {
    fs.readFile(index_1.data, 'utf-8', (err, file) => {
        if (err)
            throw err;
        const chirps = JSON.parse(file);
        const found = chirps.find((c) => c.id === req.params.id);
        res.json(found);
    });
};
exports.destroy = (req, res, next) => {
    fs.readFile(index_1.data, 'utf-8', (err, file) => {
        if (err)
            throw err;
        const chirps = JSON.parse(file);
        const found = chirps.findIndex((c) => c.id === req.params.id);
        chirps.splice(found, 1);
        fs.writeFile(index_1.data, JSON.stringify(chirps), (err) => {
            if (err)
                throw err;
            res.end();
        });
    });
};
