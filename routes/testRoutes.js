const express = require('express');
const { updateTestStatus, getTests, createTest } = require('../controllers/testController');
const router = express.Router();

// Get all tests
router.get('/', getTests);

// Create a new test
router.post('/', createTest);

// Update test status by ID
router.put('/:id/status', updateTestStatus);

module.exports = router;
