const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  sample: { type: String, required: true },
  status: { type: String, default: 'In Progress' }, // Default status
  testType: { type: String, required: true },
  customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },  // Reference to the customer who submitted the test
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
