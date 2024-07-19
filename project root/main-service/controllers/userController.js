const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

exports.register = async (req, res) => {
  try {
    const { first_name, last_name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const password_hash = await bcrypt.hash(password, salt);

    const user = new User({
      first_name,
      last_name,
      email,
      password_hash
    });

    await user.save();

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(201).json({ message: 'User registered successfully', token });
  } catch (error) {
    res.status(500).json({ message: 'Error registering user', error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password_hash);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
};

exports.getProtectedData = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ 
      message: 'Access to protected data successful', 
      user: { 
        firstName: user.first_name, 
        lastName: user.last_name, 
        email: user.email 
      } 
    });
  } catch (error) {
    res.status(500).json({ message: 'Error accessing protected data', error: error.message });
  }
};

exports.generateApiKey = async (req, res) => {
  try {
    const apiKey = crypto.randomBytes(32).toString('hex');
    const user = await User.findByIdAndUpdate(req.userId, { api_key: apiKey }, { new: true });
    res.json({ message: 'API key generated successfully', api_key: apiKey });
  } catch (error) {
    res.status(500).json({ message: 'Error generating API key', error: error.message });
  }
};
