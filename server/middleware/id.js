"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shortid_1 = require("shortid");
exports.default = (req, res, next) => {
    req.body.id = shortid_1.generate();
    next();
};
