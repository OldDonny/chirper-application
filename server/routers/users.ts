import { Router } from 'express';
import {all, single, destroy, create} from '../controllers/users.ctrl'

const router = Router();

router
    .get('/', all)
    .get('/:id', single)
    .delete('/:id', destroy)
    .post('/', create)
    .put('/')

export default router;