const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Import the User model

// Route for user registration
router.post('/register', async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, password } = req.body;
    // Check if the username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'Username already exists' });
    }
    // Hash the password before saving it
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user with the hashed password
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Route for user login
router.post('/login', async (req, res) => {
  try {
    // Extract user data from the request body
    const { username, password } = req.body;
    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Compare the provided password with the stored hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (isPasswordValid) {
      // Generate a JWT token for authentication
      const token = jwt.sign({ userId: user._id }, 'your-secret-key', {
        expiresIn: '1h', // Token expires in 1 hour (adjust as needed)
      });

      res.status(200).json({ message: 'Login successful', token });
    } else {
      // Authentication failed
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
