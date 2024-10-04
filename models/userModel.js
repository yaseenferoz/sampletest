const mongoose = require('mongoose');

// Define the User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  status: { type: String, default: 'Pending' },  // Default status to "Pending"
  code: { type: String },  // Field to store the unique code for login
});

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
