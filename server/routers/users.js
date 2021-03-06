"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_ctrl_1 = require("../controllers/users.ctrl");
const router = express_1.Router();
router
    .get('/', users_ctrl_1.all)
    .get('/:id', users_ctrl_1.single)
    .delete('/:id', users_ctrl_1.destroy)
    .post('/', users_ctrl_1.create)
    .put('/');
exports.default = router;
