import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/usersController.js';

const usersRoute = express.Router();

// ROUTES TO CONTROLLERS
usersRoute.post('/users', createUser);
usersRoute.get('/users', getUsers);
usersRoute.get('/users/:id', getUserById);
usersRoute.put('/users/:id', updateUser);
usersRoute.delete('/users/:id', deleteUser);

export default usersRoute;
