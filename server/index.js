"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = require("path");
const bp = require("body-parser");
const api_1 = require("./routers/api");
const index_1 = require("./db/index");
exports.data = path.join(__dirname, "data.json");
exports.usersPath = path.join(__dirname, 'users.json');
const app = express();
const start = path.join(__dirname, '../client/dist');
app
    .disable('x-powered-by')
    .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
    .use(bp.json())
    .use(bp.urlencoded({ extended: true }))
    .use('/api', api_1.default);
// uncomment for prod
// .use('/', express.static(start, { redirect: false }))
// .get('/*', (req: express.Request, res: express.Response) => {
//     res.sendFile(path.join(start, 'index.html'));
// })
app.listen(3000, () => {
    index_1.configure();
    console.log('listing on port 3000, tune in.');
});
