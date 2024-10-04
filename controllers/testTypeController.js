const TestType = require('../models/testTypeModel');

// Add a new test type
const addTestType = async (req, res) => {
  const { name } = req.body;

  try {
    const newTestType = new TestType({ name });
    await newTestType.save();
    res.status(201).json(newTestType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all test types
const getTestTypes = async (req, res) => {
  try {
    const testTypes = await TestType.find();
    res.status(200).json(testTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addTestType, getTestTypes };
