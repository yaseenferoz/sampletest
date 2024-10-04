const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const testRoutes = require('./routes/testRoutes');
const userRoutes = require('./routes/userRoutes');  // Import new user routes
const sampleRoutes = require('./routes/sampleRoutes');  // Import new user routes
const testTypeRoutes = require('./routes/testTypeRoutes');  // Import new user routes

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json()); // To parse JSON bodies

// Use test routes
app.use('/api/tests', testRoutes);

// Use user routes
app.use('/api/users', userRoutes);  // Add the user routes here
// Register sample routes
app.use('/api/samples', sampleRoutes);  // Ensure this line is present
// Register sample routes
app.use('/api/testTypes', testTypeRoutes);  // Ensure this line is present
// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
