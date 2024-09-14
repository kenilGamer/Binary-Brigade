var express = require('express');
var router = express.Router();
const User = require('../models/Usermodel');

// POST add a new user
router.post('/adduser', async function(req, res) {
    const { username, password, email, age, city, country, skill, bio, profileImage, matches, website } = req.body;

    if (!username || !password || !email || !age || !city || !country || !skill) {
        return res.status(400).json({ error: 'Please provide all required fields.' });
    }

    try {
        const newUser = new User({
            username,
            password,
            email,
            age,
            city,
            country,
            skill,
            bio,
            profileImage,
            matches,
            website
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Error saving user:", err);
        res.status(500).json({ error: 'Failed to create user' });
    }
});

// GET get all users
router.get('/getusers', async function(req, res) {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ error: 'Failed to get users' });
    }
});

module.exports = router;
