const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Add middleware for parsing JSON request bodies
app.use(bodyParser.json());

// Enable CORS for all routes or restrict it to your frontend's domain
app.use(cors());

// Define a route for user login
app.post('/api/login', (req, res) => {
  // Implement authentication logic here
  const { username, password } = req.body;

  // For testing purposes, you can check if the username and password match a predefined value
  if (username === 'admin' && password === '1234') {
    // Authentication successful
    res.status(200).json({ message: 'Login successful' });
  } else {
    // Authentication failed
    res.status(401).json({ message: 'Login failed' });
  }
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
