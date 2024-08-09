import mongoose from 'mongoose';

const UsersSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
		minlength: 5,
		maxlength: 50,
		match: [/^\S+@\S+\.\S+$/],
	},
	password: {
		type: String,
		required: true,
		minlength: 32,
		maxlength: 32,
	},
	name: {
		type: String,
		required: true,
		trim: true,
		minlength: 2,
		maxlength: 100,
		match: [/^[a-zA-Z\s\-]+$/],
	},
	contactNumber: {
		type: String,
		required: true,
		match: [/^\d{10}$/],
	},
	address: {
		region: {
			type: String,
			required: true,
			trim: true,
			maxlength: 50,
			match: [/^[a-zA-Z0-9\s\.\-]+$/],
		},
		province: {
			type: String,
			required: true,
			trim: true,
			maxlength: 50,
			match: [/^[a-zA-Z0-9\s\.\-]+$/],
		},
		cityMunicipality: {
			type: String,
			required: true,
			trim: true,
			maxlength: 50,
			match: [/^[a-zA-Z0-9\s\.\-]+$/],
		},
		barangay: {
			type: String,
			required: true,
			trim: true,
			maxlength: 50,
			match: [/^[a-zA-Z0-9\s\.\-]+$/],
		},
		specific: {
			type: String,
			required: true,
			trim: true,
			maxlength: 100,
			match: [/^[a-zA-Z0-9\s\.\-]+$/],
		},
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

export default mongoose.model('User', UsersSchema);
