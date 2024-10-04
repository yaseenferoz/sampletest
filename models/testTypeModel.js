const mongoose = require('mongoose');

const testTypeSchema = new mongoose.Schema({
  name: { type: String, required: true },
});

const TestType = mongoose.model('TestType', testTypeSchema);
module.exports = TestType;
