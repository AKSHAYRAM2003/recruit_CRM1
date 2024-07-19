const User = require('../models/User');

module.exports = async (req, res, next) => {
  try {
    const apiKey = req.header('X-API-Key');
    if (!apiKey) {
      return res.status(401).json({ message: 'No API key provided' });
    }

    const user = await User.findOne({ api_key: apiKey });
    if (!user) {
      return res.status(401).json({ message: 'Invalid API key' });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(500).json({ message: 'Error authenticating API key', error: error.message });
  }
};