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
app.get('/', (req, res) => {
  res.send('Hello');
});

// Use test routes
app.use('/api/tests', testRoutes);

// Use user routes
app.use('/api/users', userRoutes);  // Add the user routes here
// Register sample routes
app.use('/api/samples', sampleRoutes);  // Ensure this line is present
// Register sample routes
app.use('/api/testTypes', testTypeRoutes);  // Ensure this line is present
// Connect to MongoDB

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000 // Timeout after 10 seconds
        });
        console.log('MongoDB connected!d');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

connectDB();


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
