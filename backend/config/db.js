import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://root:root@merndb.p3zkhj6.mongodb.net/?retryWrites=true&w=majority&appName=MERNdb';

const connectDB = async () => {
	try {
		await mongoose.connect(MONGODB_URI);
		console.log('MongoDB connected...');
		return true;
	} catch (err) {
		console.error('Failed to connect to MongoDB:', err.message);
		return false;
	}
};

export default connectDB;
