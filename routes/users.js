import express from 'express';
import { createUser, getUser, getUserData, deleteUser, updateUser } from '../controllers/users.js';

const router = express.Router();

let users = []

router.get('/', getUser);
router.post('/', createUser);
router.get('/:id', getUserData);
router.delete('/:id', deleteUser);
router.patch('/:id', updateUser);

export default router;