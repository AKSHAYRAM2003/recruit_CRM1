const express = require('express');
const router = express.Router();
const apiAuth = require('../middleware/apiAuth');
const User = require('../models/User');
const Candidate = require("../models/User");

router.get('/profile', apiAuth, async (req, res) => {
  try {
    const { first_name, last_name, email } = req.user;
    res.json({ first_name, last_name, email });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving profile', error: error.message });
  }
});

router.get('/candidate', apiAuth, async (req, res) => {
  try {
    const candidates = await Candidate.find({ user_id: req.user._id });
    res.json(candidates);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving candidates', error: error.message });
  }
});

module.exports = router;