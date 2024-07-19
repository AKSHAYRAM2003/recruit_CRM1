require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const publicRoutes = require('./routes/publicRoutes');

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Public API service running on port ${PORT}`));
app.use('/api/public', publicRoutes);