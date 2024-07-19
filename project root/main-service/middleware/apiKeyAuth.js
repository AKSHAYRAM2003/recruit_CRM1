// const User = require('../models/User');

// module.exports = async (req, res, next) => {
//     const apiKey = req.header('X-API-Key');
//     if (!apiKey) {
//         return res.status(401).json({ message: 'API key is missing' });
//     }

//     try {
//         const user = await User.findOne({ apiKey });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid API key' });
//         }
//         req.userId = user._id;
//         next();
//     } catch (error) {
//         res.status(500).json({ message: 'Error authenticating API key', error: error.message });
//     }
// };

require('dotenv').config();

module.exports = (req, res, next) => {
  const apiKey = req.get('X-API-Key');
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: 'Invalid API key' });
  }
  next();
};