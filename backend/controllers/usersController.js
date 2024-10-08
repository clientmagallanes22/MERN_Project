import User from '../models/usersModel.js';

// Create a new user
export const createUser = async (req, res) => {
	try {
		const user = new User(req.body);
		// validations
		await user.save();
		res.status(201).json(user);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Get all users
export const getUsers = async (req, res) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Get a user by ID
export const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Update a user by ID
export const updateUser = async (req, res) => {
	try {
		const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.status(200).json(user);
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.status(200).json({ message: 'User deleted successfully' });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
