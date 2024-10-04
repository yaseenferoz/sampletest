const express = require('express');
const { registerUser, getUsers, approveUser,loginWithCode } = require('../controllers/userController');
const router = express.Router();

// Register a new user (Customer)
router.post('/register', registerUser);

// Get all registered users (for admin to approve)
router.get('/', getUsers);

// Approve a user (by admin)
router.put('/:id/approve', approveUser);
router.get('/login', loginWithCode);  // Add this route to handle customer login by code

module.exports = router;
