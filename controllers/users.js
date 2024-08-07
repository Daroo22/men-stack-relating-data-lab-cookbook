// controllers/users.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Index route to get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find({});
        res.render('users/index.ejs', { users });
    } catch (err) {
        res.status(500).send(err);
    }
});


// Show route to get a specific user and their pantry items
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.render('users/show.ejs', { user });
    } catch (err) {
        res.status(500).send(err);
    }
});
module.exports = router;