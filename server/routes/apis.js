const express = require('express');
const router = express.Router();
const axios = require('axios'); // If needed for making HTTP requests
const User = require('../models/Usermodel'); // Import your User model

// POST /api/adduser
router.post('/signup', async (req, res) => {
    console.log('Request body:', req.body); // Log incoming request data
  
    const { username, password, email, age, city, country, skill, bio, profileImage, matches, website } = req.body;
  console.log(req.body); // Log incoming request data
    if (!username || !password || !email || !age || !city || !country || !skill) {
      return res.status(400).json({ error: 'Please provide all required fields.' });
    }
  
    try {
      const newUser = new User({
        username, password,email,age,city,country,skill,bio,profileImage,matches,website
      });
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      console.error("Error saving user:", err);
      res.status(500).json({ error: 'Failed to create user' });
    }
  });
  

module.exports = router;
