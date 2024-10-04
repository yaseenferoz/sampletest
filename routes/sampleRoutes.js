const express = require('express');
const { addSample, getSamples } = require('../controllers/sampleController');
const router = express.Router();

// Add sample
router.post('/add', addSample);

// Get all samples
router.get('/', getSamples);

module.exports = router;
