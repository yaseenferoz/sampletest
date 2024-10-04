const Sample = require('../models/sampleModel');

// Add a new sample
const addSample = async (req, res) => {
  const { name } = req.body;

  try {
    const newSample = new Sample({ name });
    await newSample.save();
    res.status(201).json(newSample);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all samples
const getSamples = async (req, res) => {
  try {
    const samples = await Sample.find();
    res.status(200).json(samples);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addSample, getSamples };
