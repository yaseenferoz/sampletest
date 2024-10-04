const express = require('express');
const { addTestType, getTestTypes } = require('../controllers/testTypeController');
const router = express.Router();

router.post('/add', addTestType);
router.get('/', getTestTypes);

module.exports = router;
