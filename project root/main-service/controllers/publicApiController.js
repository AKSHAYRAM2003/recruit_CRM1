const User = require('../models/User');
const Candidate = require('../models/Candidate');

exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select('-password_hash');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ profile: user });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving profile', error: error.message });
    }
};

exports.getCandidates = async (req, res) => {
    try {
        const candidates = await Candidate.find({ user_id: req.userId });
        res.json({ candidates });
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving candidates', error: error.message });
    }
};