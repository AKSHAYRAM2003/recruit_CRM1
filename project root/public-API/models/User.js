const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  api_key: { type: String, unique: true }
});

// ... rest of the schema methods ...

module.exports = mongoose.model('User', userSchema);