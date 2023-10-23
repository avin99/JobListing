const express = require('express');
const dotenv = require('dotenv').config();
const jobsRoutes = require('./routes/jobs');
const applicantsRoutes = require('./routes/applicants');
const port = process.env.PORT || 3000; // Choose the port you want to run the server on

const app = express();
const colors = require('colors');
const connectDB = require('./config/db')
connectDB()

app.use('/api', jobsRoutes);
app.use('/api', applicantsRoutes);
app.use(express.static('frontend'));

// Define a basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
