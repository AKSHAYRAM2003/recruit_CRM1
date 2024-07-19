// const express = require('express');
// const router = express.Router();
// const apiAuth = require('../middleware/apiAuth');
// const User = require('../models/User');
// const Candidate = require("../models/User");

// router.get('/profile', apiAuth, async (req, res) => {
//   try {
//     const { first_name, last_name, email } = req.user;
//     res.json({ first_name, last_name, email });
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving profile', error: error.message });
//   }
// });

// router.get('/candidate', apiAuth, async (req, res) => {
//   try {
//     const candidates = await Candidate.find({ user_id: req.user._id });
//     res.json(candidates);
//   } catch (error) {
//     res.status(500).json({ message: 'Error retrieving candidates', error: error.message });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Candidate = require('../models/Candidate');
const apiKeyAuth = require('../middleware/apiAuth');

router.get('/candidate', apiKeyAuth, async (req, res) => {
  try {
    const user = await User.findOne();
    if (!user) {
      return res.status(404).json({ message: 'No user found for this API key' });
    }

    const candidates = await Candidate.find({ user_id: user._id });
    res.json({ candidates });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ... other routes ...

module.exports = router;