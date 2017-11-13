"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_proc_1 = require("./base.proc");
const all = () => {
    return base_proc_1.rows('spGetUsers');
};
const single = (id) => {
    return base_proc_1.row('GetUser', [id]);
};
const create = (username, email, password) => {
    return base_proc_1.row('NewUser', [username, email, password]);
};
const destroy = (id) => {
    return base_proc_1.empty('DeleteUser', [id]);
};
exports.default = {
    all,
    single,
    destroy,
    create,
};
