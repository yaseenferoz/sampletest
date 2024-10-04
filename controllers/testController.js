const Test = require('../models/testModel');

// Get all test submissions or filter by customerId
const getTests = async (req, res) => {
  const { customerId } = req.query;  // Get customerId from the query parameter

  try {
    let tests;
    if (customerId) {
      // If customerId is provided, filter tests by customerId
      tests = await Test.find({ customerId: customerId });
    } else {
      // Otherwise, return all tests
      tests = await Test.find();
    }

    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Create a new test submission


// Create a new test submission
const createTest = async (req, res) => {
  const { name, address, phone, sample, status, testType, customerId } = req.body;

  try {
    const newTest = new Test({
      name,
      address,
      phone,
      sample,
      status,
      testType,
      customerId,  // Make sure to save the customerId when submitting the test
    });
    await newTest.save();
    res.status(201).json(newTest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


  // Update test status
  const updateTestStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    try {
      const updatedTest = await Test.findByIdAndUpdate(id, { status }, { new: true });
      if (!updatedTest) {
        return res.status(404).json({ message: 'Test not found' });
      }
      console.log(`Updated test with ID: ${id} to status: ${status}`); // Add this log
      res.status(200).json(updatedTest);
    } catch (error) {
      console.error(error); // Log the error to inspect what went wrong
      res.status(500).json({ message: error.message });
    }
  };
  
  module.exports = {
    updateTestStatus,
  };
  

module.exports = {
  getTests,
  createTest,
  updateTestStatus,
};
