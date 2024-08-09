import express from 'express';
import { mainController } from '../controllers/mainController.js';

const mainRoute = express.Router();

// ROUTES TO CONTROLLERS
mainRoute.get('/', mainController);

export default mainRoute;
