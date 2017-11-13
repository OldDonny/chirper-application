import * as express from 'express';
import * as path from 'path';
import * as fs from 'fs';
import * as bp from 'body-parser';
import * as router from 'express';
import api from './routers/api'
import { configure } from './db/index';

export const data= path.join(__dirname ,"data.json")
export const usersPath = path.join(__dirname, 'users.json');
const app= express();
const start= path.join(__dirname, '../client/dist')

app
.disable('x-powered-by')
.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET, POST, UPDATE, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
.use(bp.json())
.use(bp.urlencoded({ extended: true }))
.use('/api', api)

// uncomment for prod

// .use('/', express.static(start, { redirect: false }))
// .get('/*', (req: express.Request, res: express.Response) => {
//     res.sendFile(path.join(start, 'index.html'));
// })



app.listen(3000, () => {
    configure();
    console.log('listing on port 3000, tune in.')
})