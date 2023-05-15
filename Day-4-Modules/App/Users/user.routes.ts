import express from 'express';
import { createUser, getAllUsers, getSingleUser } from './user.controller';

const router = express.Router();

router.get('/users', getAllUsers);
router.post('/user', createUser);
router.get('/user/:id', getSingleUser);

export default router;