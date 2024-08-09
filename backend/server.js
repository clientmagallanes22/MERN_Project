import express from 'express';
const app = express();

// CONFIGS
import { IP, PORT, BASEURL } from './config/config.js';
import connectDB from './config/db.js';

// MIDDLEWARES
app.use(express.json());
import cors from 'cors';
app.use(cors());

// ROUTES
import mainRoute from './routes/mainRoute.js';
app.use(mainRoute);
import usersRoute from './routes/usersRoute.js';
app.use(usersRoute);

// STARTSERVER
const startServer = async () => {
	const dbConnected = await connectDB();
	if (dbConnected) {
		app.listen(PORT, IP, () => {
			console.log(`Server running on ${BASEURL}`);
		});
	} else {
		console.error('Failed to start server due to database connection issues.');
	}
};
startServer();
