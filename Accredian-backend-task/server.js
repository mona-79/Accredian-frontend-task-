// server.js
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load environment variables
dotenv.config();

// Create an instance of express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Refer & Earn Backend is running');
});

// Set port and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
