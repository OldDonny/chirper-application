import {rows, row, empty} from './base.proc';

const all = () => {
    return rows('spGetUsers');
};

const single = (id: number) => {
    return row('GetUser', [id])
};

const create = (username:string, email: string, password: string) => {
    return row('NewUser', [username, email, password])
};


const destroy =  (id: number) => {
    return empty('DeleteUser', [id])
};



export default {
    all,
    single, 
    destroy,
    create,
   
};