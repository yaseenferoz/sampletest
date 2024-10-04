const User = require('../models/userModel');  // Import the User model

// Register a new user (customer)
const registerUser = async (req, res) => {
  const { name, email, address, phone } = req.body;

  try {
    const newUser = new User({ name, email, address, phone, status: 'Pending' });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: error.message });
  }
};

// Get all users (for admin approval)
const getUsers = async (req, res) => {
  try {
    const users = await User.find();  // Fetch all users from the database
    res.status(200).json(users);  // Return the users in JSON format
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: error.message });
  }
};

// Approve a user (admin action) and generate a unique code
const approveUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Generate a unique 6-character code
      const code = Math.random().toString(36).substring(2, 8);  // Example: 'ab12cd'
  
      // Find the user and update the status to 'Approved' and set the code
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { status: 'Approved', code: code },  // Save the code in the user document
        { new: true }  // Return the updated document
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Return the updated user including the generated code
      res.status(200).json(updatedUser);
    } catch (error) {
      console.error('Error approving user:', error);
      res.status(500).json({ message: error.message });
    }
  };
  
// Login user by code
// Login user by code
const loginWithCode = async (req, res) => {
    const { code } = req.query;  // Extract code from query parameters
  
    try {
      // Find user with the provided code and status "Approved"
      const user = await User.findOne({ code: code, status: 'Approved' });
  
      if (!user) {
        return res.status(404).json({ message: 'Invalid code' });
      }
  
      // Return the user details on successful login
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
module.exports = {
  registerUser,
  getUsers,
  approveUser,
  loginWithCode
};
