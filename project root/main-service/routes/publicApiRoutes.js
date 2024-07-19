// const express = require('express');
// const router = express.Router();
// const publicApiController = require('../controllers/publicApiController');
// const apiKeyAuth = require('../middleware/apiKeyAuth');

// router.get('/profile', apiKeyAuth, publicApiController.getProfile);
// router.get('/candidates', apiKeyAuth, publicApiController.getCandidates);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// const apiKeyAuth = require('../middleware/apiKeyAuth');

// router.post('/profile', apiKeyAuth, async (req, res) => {
//   try {
//     // For this example, we'll just return the first user
//     // In a real application, you'd associate the API key with a specific user
//     const user = await User.findOne();
//     if (!user) {
//       return res.status(404).json({ message: 'No user found' });
//     }
//     res.json({
//       first_name: user.first_name,
//       last_name: user.last_name,
//       email: user.email
//     });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// module.exports = router;


//new

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const apiKeyAuth = require('../middleware/apiKeyAuth');
const crypto = require('crypto'); // Ensure crypto is required

router.post('/profile', apiKeyAuth, async (req, res) => {
  try {
    // For this example, we'll just return the first user
    // In a real application, you'd associate the API key with a specific user
    const user = await User.findOne();
    if (!user) {
      return res.status(404).json({ message: 'No user found' });
    }
    res.json({
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// New route to handle API key generation
router.post('/generate-api-key', apiKeyAuth, async (req, res) => {
  try {
    const apiKey = crypto.randomBytes(32).toString('hex');
    const user = await User.findByIdAndUpdate(req.userId, { apiKey }, { new: true });
    res.json({ message: 'API key generated successfully', api_key: apiKey });
  } catch (error) {
    res.status(500).json({ message: 'Error generating API key', error: error.message });
  }
});

// New candidate route
router.get('/candidate', apiKeyAuth, async (req, res) => {
  try {
    // Retrieve the candidate associated with the authenticated user
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'No user found' });
    }

    // Assuming there is a Candidate model and a relationship between User and Candidate
    const Candidate = require('../models/Candidate');
    const candidate = await Candidate.findOne({ userId: user._id });
    
    if (!candidate) {
      return res.status(404).json({ message: 'No candidate found for this user' });
    }

    res.json(candidate);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
